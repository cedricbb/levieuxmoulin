import { View, Text } from 'react-native'
import styles from './giteitemwithoutbullet-style'

export default function GiteItemWithoutBullet({
  description,
}: {
  description: string
}) {
  return (
    <View style={styles.giteItem}>
      <Text style={styles.giteDescription}>{description}</Text>
    </View>
  )
}
