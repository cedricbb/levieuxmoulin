import { View, Text, Image } from 'react-native'
import { images } from '@/constants/images'
import styles from './Footer.style'

export default function Footer() {
  return (
    <View>
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
  )
}