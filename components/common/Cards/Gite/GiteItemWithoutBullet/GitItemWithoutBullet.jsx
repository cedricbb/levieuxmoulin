import { View, Text } from 'react-native'
import styles from './GiteItemWithoutBullet.style'

export default function GiteItemWithoutBullet({ description }) {
  return (
    <View style={styles.giteItem}>
      <Text style={styles.giteDescription}>{description}</Text>
    </View>
  )
}
