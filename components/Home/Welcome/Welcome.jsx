import { View, Text } from 'react-native'
import styles from './Welcome.style'

export default function Welcome() {
  return (
    <View>
      <Text style={styles.welcomeTitle}>Bienvenue au Vieux Moulin</Text>
      <Text style={styles.welcomeText}>
        Niché au cœur du Grand-Bornand Chinaillon, notre gîte authentique
        vous propose un séjour inoubliable dans un cadre chaleureux et
        montagnard. Profitez de la beauté des Alpes françaises dans ce havre
        de paix traditionnel et confortable.
        </Text>
    </View>
  )
}