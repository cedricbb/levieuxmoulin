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
    
    // Check if the path is in the admin segment and redirect if not authenticated
    const inAdminSegment = segments[0] === '(admin)';
    
    if (inAdminSegment && !isAuthenticated) {
      router.replace('/login');
    } else if (!inAdminSegment && segments[0] === 'login' && isAuthenticated) {
      router.replace('/(admin)');
    }
  }, [isAuthenticated, segments, isLoading]);

  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false }} />
    </Stack>
  );
}