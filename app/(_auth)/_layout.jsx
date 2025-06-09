import { Stack } from 'expo-router'
import { useAuthContext } from '@/contexts/AuthContext'
import { useEffect } from 'react'
import { useRouter, useSegments } from 'expo-router'

export default function AuthLayout() {
  const { isAuthenticated, isLoading } = useAuthContext()
  const router = useRouter()
  const segments = useSegments()

  useEffect(() => {
    if (!isLoading && segments[0] === '(admin)' && !isAuthenticated) {
      router.replace('/(tabs)/account')
    }
  }, [isAuthenticated, segments, isLoading])

  return <Stack screenOptions={{ headerShown: false }} />
}
