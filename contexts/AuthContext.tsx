import React, { createContext, useState, useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useRouter, useSegments } from 'expo-router'

interface AuthContextType {
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  isLoading: true,
  login: async () => {},
  logout: async () => {},
})

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const segments = useSegments()

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = await AsyncStorage.getItem('auth_token')
        setIsAuthenticated(!!token)
      } catch (error) {
        console.error('Error checking auth status:', error)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuthStatus()
  }, [])

  const login = async (email: string, password: string) => {
    if (email === 'admin@levieuxmoulin.fr' && password === 'admin123') {
      await AsyncStorage.setItem('auth_token', 'mock_token')
      setIsAuthenticated(true)
      router.replace('/(admin)')
      return
    }

    throw new Error('Invalid credentials')
  }

  const logout = async () => {
    await AsyncStorage.removeItem('auth_token')
    setIsAuthenticated(false)
    router.replace('/(tabs)')
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
