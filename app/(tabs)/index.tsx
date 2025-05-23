import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import { useContent } from '@/hooks/useContent'
import LoadingScreen from '@/components/ui/LoadingScreen'
import ErrorScreen from '@/components/ui/ErrorScreen'
import { images } from '../../assets/images/images'
import { router } from 'expo-router'
import { useAuthContext } from '@/contexts/AuthContext'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { Feather } from 'lucide-react-native'

export default function HomeScreen() {
  const { content, isLoading, error } = useContent('home')
  const { isAuthenticated } = useAuthContext()
  const insets = useSafeAreaInsets()

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
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.heroContainer}>
          <Image
            source={images.chaletVuDuPont}
            style={styles.heroImage}
            resizeMode="cover"
          />
          <View style={styles.heroOverlay}>
            <Text style={styles.heroTitle}>Le Vieux Moulin</Text>
            <Text style={styles.heroSubtitle}>Chinaillon</Text>
          </View>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.welcomeTitle}>Bienvenue au Vieux Moulin</Text>
          <Text style={styles.welcomeText}>
            Niché au cœur du Grand-Bornand Chinaillon, notre gîte authentique
            vous propose un séjour inoubliable dans un cadre chaleureux et
            montagnard. Profitez de la beauté des Alpes françaises dans ce havre
            de paix traditionnel et confortable.
          </Text>

          <View style={styles.highlightsContainer}>
            <View style={styles.highlightItem}>
              <Text style={styles.highlightTitle}>Authenticité</Text>
              <Text style={styles.highlightText}>
                Un gîte de caractère aux traditions savoyardes préservées
              </Text>
            </View>

            <View style={styles.highlightItem}>
              <Text style={styles.highlightTitle}>Confort</Text>
              <Text style={styles.highlightText}>
                Des équipements modernes dans un écrin traditionnel
              </Text>
            </View>

            <View style={styles.highlightItem}>
              <Text style={styles.highlightTitle}>Emplacement</Text>
              <Text style={styles.highlightText}>
                Idéalement situé pour profiter des activités en toutes saisons
              </Text>
            </View>
          </View>

          <Image
            source={images.chaletVuDeFace}
            style={styles.secondaryImage}
            resizeMode="cover"
          />

          <Text style={styles.closingText}>
            Que ce soit pour des vacances en famille, ou entre amis, Le Vieux
            Moulin vous accueille pour un séjour inoubliable au cœur des
            montagnes.
          </Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={[
          styles.adminButton,
          { top: insets.top + 10 },
          isAuthenticated ? styles.adminButtonActive : {},
        ]}
        onPress={handleAdminPress}
      >
        <Feather size={24} color={isAuthenticated ? '#8B5A2B' : '#fff'} />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F5F0',
  },
  heroContainer: {
    height: 300,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  heroTitle: {
    fontFamily: 'Lora-Bold',
    fontSize: 32,
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  heroSubtitle: {
    fontFamily: 'Lora-Regular',
    fontSize: 20,
    color: 'white',
    marginTop: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  contentContainer: {
    padding: 24,
  },
  welcomeTitle: {
    fontFamily: 'Lora-Bold',
    fontSize: 24,
    color: '#5D4037',
    marginBottom: 16,
  },
  welcomeText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    lineHeight: 24,
    color: '#333333',
    marginBottom: 32,
  },
  highlightsContainer: {
    marginBottom: 32,
  },
  highlightItem: {
    marginBottom: 20,
  },
  highlightTitle: {
    fontFamily: 'Lora-Bold',
    fontSize: 18,
    color: '#8B5A2B',
    marginBottom: 8,
  },
  highlightText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 15,
    lineHeight: 22,
    color: '#555555',
  },
  secondaryImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 24,
  },
  closingText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    fontStyle: 'italic',
    lineHeight: 24,
    color: '#5D4037',
    marginBottom: 24,
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    zIndex: 1000,
  },
  adminButtonActive: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderWidth: 2,
    borderColor: '#8B5A2B',
  },
})
