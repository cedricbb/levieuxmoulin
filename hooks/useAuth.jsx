import { useAuthContext } from '@/contexts/AuthContext'

export function useAuth() {
  const { isAuthenticated, isAdmin, isLoading, login, logout } = useAuthContext()

  return {
    isAuthenticated,
    isAdmin,
    isLoading,
    login,
    logout,
  }
}
