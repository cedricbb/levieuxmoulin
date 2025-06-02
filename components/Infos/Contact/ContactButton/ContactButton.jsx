import { TouchableOpacity, Text } from 'react-native'
import styles from './ContactButton.style'

export default function ContactButton({ icon: Icon, text, onPress, color = "#8B5A2B" }) {
  return (
    <TouchableOpacity style={styles.contactItem} onPress={onPress}>
      <Icon size={24} color={color} />
      <Text style={styles.contactText}>{text}</Text>
    </TouchableOpacity>
  )
}