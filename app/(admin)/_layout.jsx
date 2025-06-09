import { Stack } from 'expo-router'
import { useAuthContext } from '@/contexts/AuthContext'
import { useEffect } from 'react'
import { useRouter } from 'expo-router'
import { Alert } from 'react-native'

export default function AdminLayout() {
  const { isAuthenticated, isAdmin, isLoading } = useAuthContext()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        router.replace('/(tabs)/account')
      } else if (!isAdmin) {
        Alert.alert(
          'Accès refusé',
          "Vous n'avez pas les droits d'administrateur nécessaires.",
          [{ text: 'OK', onPress: () => router.replace('/(tabs)') }],
        )
      }
    }
  }, [isAuthenticated, isAdmin, isLoading])

  if (isLoading || !isAuthenticated || !isAdmin) {
    return null
  }

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#8B5A2B',
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: 'Administration',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="edit-home"
        options={{
          title: 'Modifier Accueil',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="edit-gite"
        options={{
          title: 'Modifier Le Gîte',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="edit-activities"
        options={{
          title: 'Modifier Activités',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="edit-gallery"
        options={{
          title: 'Modifier Galerie',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="edit-infos"
        options={{
          title: 'Modifier Infos',
          headerShown: true,
        }}
      />
    </Stack>
  )
}
