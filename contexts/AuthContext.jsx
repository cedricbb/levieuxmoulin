import React, { createContext, useState, useEffect, useContext } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'expo-router'

const AuthContext = createContext({
  isAuthenticated: false,
  isLoading: true,
  isAdmin: false,
  user: null,
  login: async () => {},
  logout: async () => {},
})

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState(null)
  const router = useRouter()

  // Vérifie la session au chargement
  useEffect(() => {
    const getSession = async () => {
      setIsLoading(true)
      const { data, error } = await supabase.auth.getSession()
      if (data?.session?.user) {
        setUser(data.session.user)
        setIsAuthenticated(true)
        // Récupère le rôle dans la table profiles
        const { data: profile } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', data.session.user.id)
          .single()
        setIsAdmin(profile?.role === "admin")
      } else {
        setUser(null)
        setIsAuthenticated(false)
        setIsAdmin(false)
      }
      setIsLoading(false)
    }
    getSession()
    // Écoute les changements de session
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser(session.user)
        setIsAuthenticated(true)
        supabase
          .from('profiles')
          .select('role')
          .eq('id', session.user.id)
          .single()
          .then(({ data: profile }) => setIsAdmin(profile?.role === "admin"))
      } else {
        setUser(null)
        setIsAuthenticated(false)
        setIsAdmin(false)
      }
    })
    return () => listener?.subscription.unsubscribe()
  }, [])

  // Fonction de login
  const login = async (email, password) => {
    setIsLoading(true)
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setIsLoading(false)
      throw error
    }
    setUser(data.user)
    setIsAuthenticated(true)
    // Récupère le rôle
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', data.user.id)
      .single()
    setIsAdmin(profile?.role === 'admin')
    setIsLoading(false)
    // Redirige selon le rôle
    if (profile?.role === 'admin') {
      router.replace('/(admin)')
    } else {
      router.replace('/(tabs)')
    }
  }

  // Fonction de logout
  const logout = async () => {
    await supabase.auth.signOut()
    setUser(null)
    setIsAuthenticated(false)
    setIsAdmin(false)
    router.replace('/(tabs)')
  }

  // Fonction de signup
  const signup = async (email, password) => {
    setIsLoading(true)
    const { data, error } = await supabase.auth.signUp({ email, password })
    if (error) {
      setIsLoading(false)
      throw error
    }
    setUser(data.user)
    setIsAuthenticated(true)
    setIsLoading(false)
    router.replace('/(tabs)')
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, isAdmin, isLoading, user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  )
}