import { View, Text } from 'react-native'
import styles from './Address.style'

export default function Address() {
  return (
    <View style={styles.addressContainer}>
        <Text style={styles.addressLabel}>Adresse</Text>
        <Text style={styles.addressText}>Le Vieux Moulin</Text>
        <Text style={styles.addressText}>1234 Route de Chinaillon</Text>
        <Text style={styles.addressText}>
        74450 Le Grand-Bornand Chinaillon
        </Text>
        <Text style={styles.addressText}>France</Text>
    </View>
  )
}