import {
  View,
  StyleSheet,
  ScrollView,
} from 'react-native'
import { useContent } from '@/hooks/useContent'
import LoadingScreen from '@/components/Ui/LoadingScreen'
import ErrorScreen from '@/components/Ui/ErrorScreen'
import Hero from '@/components/Home/Hero/Hero'
import Welcome from '@/components/Home/Welcome/Welcome'
import HighLight from '@/components/Home/HighLight/HighLight'
import Footer from '@/components/Home/Footer/Footer'
import { COLORS, SIZES } from '@/constants/theme'

export default function HomeScreen() {
  const { content, isLoading, error } = useContent('home')

  if (isLoading) return <LoadingScreen />
  if (error) return <ErrorScreen message={error} />

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
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.seashell,
    marginBottom: 72,
  },
  contentContainer: {
    padding: SIZES.lg,
  },
})
