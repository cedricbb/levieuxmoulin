import { View, Text, Image } from 'react-native'
import { images } from '@/constants/images'
import styles from './Hero.style'

export default function Hero() {
  return (
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
  )
}
