import { View, Text } from 'react-native'
import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import { images } from '@/constants/images'
import styles from './Hero.style'

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj['

export default function Hero() {
  return (
    <View style={styles.heroContainer}>
      <Image
        source={images.chaletVuDuPont}
        style={styles.heroImage}
        contentFit="cover"
        transition={1000}
        placeholder={blurhash}
      />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={styles.gradient}
      />
      <View style={styles.heroContent}>
        <Text style={styles.heroTitle}>Le Vieux Moulin</Text>
        <Text style={styles.heroSubtitle}>Chinaillon</Text>
        <Text style={styles.heroDescription}>
          Un chalet authentique au cœur des Alpes
        </Text>
      </View>
    </View>
  )
}