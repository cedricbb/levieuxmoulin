import { Stack } from 'expo-router';
import { useAuthContext } from '@/contexts/AuthContext';
import { useEffect } from 'react';
import { useRouter, useSegments } from 'expo-router';

export default function AuthLayout() {
  const { isAuthenticated, isLoading } = useAuthContext();
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    // Skip this effect if we're still loading
    if (isLoading) return;
    
    // Check if the path is in the admin segment
    const inAdminSegment = segments[0] === '(admin)';
    
    if (inAdminSegment && !isAuthenticated) {
      // Only redirect to login if trying to access admin area
      router.replace('/login');
    } else if (!inAdminSegment && isAuthenticated) {
      // If authenticated and not in admin, allow normal navigation
      router.replace('/(tabs)');
    }
  }, [isAuthenticated, segments, isLoading]);

  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false }} />
    </Stack>
  );
}