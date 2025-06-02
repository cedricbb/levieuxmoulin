import { View, Text, StyleSheet, ScrollView, Linking } from 'react-native'
import { useContent } from '@/hooks/useContent'
import LoadingScreen from '@/components/Ui/LoadingScreen'
import ErrorScreen from '@/components/Ui/ErrorScreen'
import { Clock, Calendar } from 'lucide-react-native'
import Map from '@/components/Infos/Map/Map'
import Address from '@/components/Infos/Address/Address'
import Directions from '@/components/Infos/Directions/Directions'
import Contact from '@/components/Infos/Contact/Contact'
import Spacer from '@/components/Ui/Spacer'
import { SIZES, COLORS } from '@/constants/theme'
import FaqItem from '@/components/Infos/FaqItem/FaqItem'
import ScheduleItem from '@/components/Infos/ScheduleItem/ScheduleItem'

export default function InfosScreen() {
  const { content, isLoading, error } = useContent('infos')

  if (isLoading) return <LoadingScreen />
  if (error) return <ErrorScreen message={error} onRetry={() => {}} />

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Comment nous trouver</Text>
        <Map />
        <Address />
        <Directions />
      </View>

      <Contact />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Horaires</Text>

        <ScheduleItem
          icon={Clock}
          title="Arrivée / Départ"
          lines={['• Arrivée : à partir de 16h00', '• Départ : avant 10h00']}
        />

        <ScheduleItem
          icon={Calendar}
          title="Périodes de location"
          lines={[
            '• Haute saison (hiver/été) : location à la semaine, du samedi au samedi',
            '• Basse saison : location possible pour des séjours plus courts (minimum 2 nuits)',
          ]}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Questions fréquentes</Text>

        <FaqItem
          question="Les animaux sont-ils acceptés ?"
          answer="Oui, les animaux de compagnie bien éduqués sont acceptés avec un
        supplément de 50€ par séjour."
        />

        <FaqItem
          question="Y a-t-il un parking disponible ?"
          answer="Oui, le gîte dispose d'un parking privé pouvant accueillir jusqu'à 3
        véhicules."
        />

        <FaqItem
          question="Le linge de maison est-il fourni ?"
          answer="Oui, les draps et serviettes sont fournis. Les lits sont faits à
        votre arrivée."
        />

        <FaqItem
          question="Comment se déplacer sans voiture ?"
          answer="Une navette gratuite dessert le village et la station durant la
        saison d'hiver. En été, des bus relient Le Grand-Bornand aux
        villages voisins."
        />
      </View>
      <Spacer height={72} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F5F0',
    marginBottom: 72,
  },
  section: {
    padding: SIZES.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.cultured,
  },
  sectionTitle: {
    fontFamily: 'poppinsBold',
    fontSize: 22,
    color: COLORS.secondary,
    marginBottom: SIZES.md,
  },
})
