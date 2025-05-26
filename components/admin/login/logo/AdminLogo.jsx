import { View, Text, Image } from 'react-native'
import styles from './adminlogo-style'
import { images } from '../../../../constants/images'

export default function AdminLogo() {
  return (
    <View style={styles.logoContainer}>
      <Image
        source={images.chaletVuDuPont}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Le Vieux Moulin</Text>
      <Text style={styles.subtitle}>Administration</Text>
    </View>
  )
}
