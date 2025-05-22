import { Stack } from 'expo-router';
import { useAuthContext } from '@/contexts/AuthContext';
import { useEffect } from 'react';
import { useRouter } from 'expo-router';

export default function AdminLayout() {
  const { isAuthenticated, isLoading } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace('/login');
    }
  }, [isAuthenticated, isLoading]);

  if (isLoading || !isAuthenticated) {
    return null;
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
      }}>
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
  );
}