import { useEffect } from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useFrameworkReady } from '@/hooks/useFrameworkReady'
import { useFonts } from 'expo-font'
import { SplashScreen } from 'expo-router'
import { AuthProvider } from '@/contexts/AuthContext'
import { ContentProvider } from '@/contexts/ContentContext'
import * as NavigationBar from 'expo-navigation-bar'
import { Platform } from 'react-native'

// Prevent the splash screen from auto-hiding before asset loading is complete
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  useFrameworkReady()

  useEffect(() => {
    async function hideNavigationBar() {
      if (Platform.OS === 'android') {
        console.log('Tentative de masquage agressif de la NavigationBar...');
        try {
          // Masque la barre et la cache immédiatement
          await NavigationBar.setBehaviorAsync('overlay-swipe'); // <-- Changement ici
          await NavigationBar.setVisibilityAsync('hidden');
          await NavigationBar.setPositionAsync('absolute');
          console.log('NavigationBar masquée en mode "immediate" avec succès (sur Android).');
        } catch (error) {
          console.error('Erreur lors du masquage de la NavigationBar :', error);
        }
      }
    }

    hideNavigationBar();

    return () => {
      if (Platform.OS === 'android') {
        console.log('Restauration de la NavigationBar à la désinstallation (mode "immediate").');
        NavigationBar.setVisibilityAsync('visible');
        NavigationBar.setBehaviorAsync('inset-swipe'); // Revenir au comportement par défaut
        NavigationBar.setPositionAsync('relative');
      }
    };
  }, []);

  const [fontsLoaded, fontError] = useFonts({
    poppinsBold: require('../assets/fonts/Poppins-Bold.ttf'),
    poppinsSemiBold: require('../assets/fonts/Poppins-SemiBold.ttf'),
    interMedium: require('../assets/fonts/Inter-Medium.ttf'),
    interRegular: require('../assets/fonts/Inter-Regular.ttf'),
  })

  useEffect(() => {
    if (fontsLoaded || fontError) {
      // Hide the splash screen after fonts have loaded (or an error was encountered)
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontError])

  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <AuthProvider>
      <ContentProvider>
        <StatusBar style="auto" hidden={true} />
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(_auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(admin)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" options={{ headerShown: false }} />
        </Stack>
      </ContentProvider>
    </AuthProvider>
  )
}
