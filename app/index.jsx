import { useEffect } from 'react'
import { useRouter } from 'expo-router'

export default function IndexRedirect() {
  const router = useRouter()

  useEffect(() => {
    // Redirige automatiquement vers la page d'accueil front
    router.replace('/(tabs)/HomeTab')
  }, [])

  return null
}
