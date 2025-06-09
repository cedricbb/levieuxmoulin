import React, { createContext, useState, useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useRouter, useSegments } from 'expo-router'

const AuthContext = createContext({
  isAuthenticated: false,
  isLoading: true,
  isAdmin: false,
  login: async () => {},
  logout: async () => {},
})

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const segments = useSegments()

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = await AsyncStorage.getItem('auth_token')
        const userType = await AsyncStorage.getItem('user_type')
        setIsAuthenticated(!!token)
        setIsAdmin(userType === 'admin')
      } catch (error) {
        console.error('Error checking auth status:', error)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuthStatus()
  }, [])

  const login = async (email, password) => {
    // Admin authentication
    if (email === 'admin@levieuxmoulin.fr' && password === 'admin123') {
      await AsyncStorage.setItem('auth_token', 'admin_token')
      await AsyncStorage.setItem('user_type', 'admin')
      setIsAuthenticated(true)
      setIsAdmin(true)
      router.replace('/(admin)')
      return
    }

    // Regular user authentication
    if (email && password) {
      // In a real app, you would validate against a backend
      // For this example, we'll accept any non-empty email/password
      await AsyncStorage.setItem('auth_token', 'user_token')
      await AsyncStorage.setItem('user_type', 'user')
      setIsAuthenticated(true)
      setIsAdmin(false)
      router.replace('/(tabs)')
      return
    }

    throw new Error('Invalid credentials')
  }

  const logout = async () => {
    await AsyncStorage.removeItem('auth_token')
    await AsyncStorage.removeItem('user_type')
    setIsAuthenticated(false)
    setIsAdmin(false)
    router.replace('/(tabs)')
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, isAdmin, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
