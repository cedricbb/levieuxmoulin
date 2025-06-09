import { useEffect } from 'react'
import { useRouter } from 'expo-router'

export default function LoginScreen() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to account screen
    router.replace('/(tabs)/account')
  }, [])

  return null
}
