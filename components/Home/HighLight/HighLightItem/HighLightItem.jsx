import { View, Text } from 'react-native'
import styles from './HighLightItem.style'

export default function HighLightItem({ title, text }) {
  return (
    <View style={styles.highlightItem}>
      <Text style={styles.highlightTitle}>{title}</Text>
      <Text style={styles.highlightText}>{text}</Text>
    </View>
  )
}