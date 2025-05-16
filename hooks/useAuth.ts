import { useAuthContext } from '@/contexts/AuthContext';

export function useAuth() {
  const { isAuthenticated, isLoading, login, logout } = useAuthContext();
  
  return {
    isAuthenticated,
    isLoading,
    login,
    logout,
  };
}