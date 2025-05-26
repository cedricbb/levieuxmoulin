import { View, Text } from 'react-native'
import styles from './giteitem-style'

export default function GiteItem({ description }) {
  const items = description
    .split('\n')
    .map((item) => item.trim())
    .filter((item) => item.length > 0)

  return (
    <View style={styles.giteItem}>
      {items.map((item, index) => (
        <View key={index} style={styles.bulletItem}>
          <Text style={styles.bulletPoint}>•</Text>
          <Text style={styles.bulletText}>{item}</Text>
        </View>
      ))}
    </View>
  )
}
