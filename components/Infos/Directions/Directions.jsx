import { View, Text } from 'react-native'
import styles from './Directions.style'

export default function Directions() {
  return (
    <View style={styles.directionsContainer}>
        <Text style={styles.directionsTitle}>Comment y accéder</Text>
        <Text style={styles.directionsText}>
        • Depuis Annecy (35 km) : suivre la D909 direction Thônes, puis la
        D909 direction Le Grand-Bornand. À l'entrée du Grand-Bornand,
        prendre la D4 direction Chinaillon.{'\n\n'}• Depuis Genève (50 km) :
        suivre l'A41 direction Annecy, sortie 19 Annecy Nord, puis suivre
        les indications pour Le Grand-Bornand.{'\n\n'}• En avion : Aéroport
        de Genève (50 km) ou Aéroport d'Annecy (35 km).{'\n\n'}• En train :
        Gare d'Annecy, puis bus ou taxi jusqu'au Grand-Bornand.
        </Text>
    </View>
  )
}