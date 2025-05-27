import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import { useContent } from '@/hooks/useContent'
import LoadingScreen from '@/components/Ui/LoadingScreen'
import ErrorScreen from '@/components/Ui/ErrorScreen'
import Hero from '@/components/Home/Hero/Hero'
import Welcome from '@/components/Home/Welcome/Welcome'
import HighLight from '@/components/Home/HighLight/HighLight'
import { router } from 'expo-router'
import { useAuthContext } from '@/contexts/AuthContext'
import { Feather } from 'lucide-react-native'
import { COLORS, SIZES } from '@/constants/theme'
import Footer from '@/components/Home/Footer/Footer'

export default function HomeScreen() {
  const { content, isLoading, error } = useContent('home')
  const { isAuthenticated } = useAuthContext()

  if (isLoading) return <LoadingScreen />
  if (error) return <ErrorScreen message={error} />

  const handleAdminPress = () => {
    if (isAuthenticated) {
      router.push('/(admin)')
    } else {
      router.push('/login')
    }
  }

  return (
    <>
      <ScrollView style={styles.container}>
        <Hero />
        <View style={styles.contentContainer}>
          <Welcome />
          <HighLight />
          <Footer />
        </View>
      </ScrollView>
      <TouchableOpacity
        style={[
          styles.adminButton,
          isAuthenticated ? styles.adminButtonActive : {},
        ]}
        onPress={handleAdminPress}
      >
        <Feather size={24} color={isAuthenticated ? '#8B5A2B' : '#fff'} />
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.seashell,
  },
  contentContainer: {
    padding: SIZES.lg,
  },
  adminButton: {
    position: 'absolute',
    right: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    elevation: 5,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    zIndex: 1000,
  },
  adminButtonActive: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderWidth: 2,
    borderColor: COLORS.secondary,
  },
})
