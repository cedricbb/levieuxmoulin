import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native'
import { useContent } from '@/hooks/useContent'
import LoadingScreen from '@/components/ui/LoadingScreen'
import ErrorScreen from '@/components/ui/ErrorScreen'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  CircleHelp as HelpCircle,
  ExternalLink,
} from 'lucide-react-native'

export default function InfosScreen() {
  const { content, isLoading, error } = useContent('infos')

  if (isLoading) return <LoadingScreen />
  if (error) return <ErrorScreen message={error} />

  const openMap = () => {
    const address = 'Le Vieux Moulin, Chinaillon, Le Grand-Bornand, France'
    const url = `https://maps.google.com/?q=${encodeURIComponent(address)}`
    Linking.openURL(url)
  }

  const makePhoneCall = () => {
    Linking.openURL('tel:+33612345678')
  }

  const sendEmail = () => {
    Linking.openURL('mailto:contact@levieuxmoulin-chinaillon.fr')
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Comment nous trouver</Text>

        <TouchableOpacity style={styles.mapContainer} onPress={openMap}>
          <View style={styles.mapPlaceholder}>
            <MapPin size={40} color="#8B5A2B" />
            <Text style={styles.mapText}>Ouvrir dans Google Maps</Text>
            <ExternalLink size={16} color="#8B5A2B" />
          </View>
        </TouchableOpacity>

        <View style={styles.addressContainer}>
          <Text style={styles.addressLabel}>Adresse</Text>
          <Text style={styles.addressText}>Le Vieux Moulin</Text>
          <Text style={styles.addressText}>1234 Route de Chinaillon</Text>
          <Text style={styles.addressText}>
            74450 Le Grand-Bornand Chinaillon
          </Text>
          <Text style={styles.addressText}>France</Text>
        </View>

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
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact</Text>

        <TouchableOpacity style={styles.contactItem} onPress={makePhoneCall}>
          <Phone size={24} color="#8B5A2B" />
          <Text style={styles.contactText}>+33 6 12 34 56 78</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactItem} onPress={sendEmail}>
          <Mail size={24} color="#8B5A2B" />
          <Text style={styles.contactText}>
            contact@levieuxmoulin-chinaillon.fr
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Horaires</Text>

        <View style={styles.scheduleItem}>
          <Clock size={24} color="#8B5A2B" />
          <View style={styles.scheduleTextContainer}>
            <Text style={styles.scheduleTitle}>Arrivée / Départ</Text>
            <Text style={styles.scheduleText}>
              • Arrivée : à partir de 16h00
            </Text>
            <Text style={styles.scheduleText}>• Départ : avant 10h00</Text>
          </View>
        </View>

        <View style={styles.scheduleItem}>
          <Calendar size={24} color="#8B5A2B" />
          <View style={styles.scheduleTextContainer}>
            <Text style={styles.scheduleTitle}>Périodes de location</Text>
            <Text style={styles.scheduleText}>
              • Haute saison (hiver/été) : location à la semaine, du samedi au
              samedi
            </Text>
            <Text style={styles.scheduleText}>
              • Basse saison : location possible pour des séjours plus courts
              (minimum 2 nuits)
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Questions fréquentes</Text>

        <View style={styles.faqItem}>
          <View style={styles.faqQuestion}>
            <HelpCircle size={20} color="#8B5A2B" />
            <Text style={styles.faqQuestionText}>
              Les animaux sont-ils acceptés ?
            </Text>
          </View>
          <Text style={styles.faqAnswerText}>
            Oui, les animaux de compagnie bien éduqués sont acceptés avec un
            supplément de 50€ par séjour.
          </Text>
        </View>

        <View style={styles.faqItem}>
          <View style={styles.faqQuestion}>
            <HelpCircle size={20} color="#8B5A2B" />
            <Text style={styles.faqQuestionText}>
              Y a-t-il un parking disponible ?
            </Text>
          </View>
          <Text style={styles.faqAnswerText}>
            Oui, le gîte dispose d'un parking privé pouvant accueillir jusqu'à 3
            véhicules.
          </Text>
        </View>

        <View style={styles.faqItem}>
          <View style={styles.faqQuestion}>
            <HelpCircle size={20} color="#8B5A2B" />
            <Text style={styles.faqQuestionText}>
              Le linge de maison est-il fourni ?
            </Text>
          </View>
          <Text style={styles.faqAnswerText}>
            Oui, les draps et serviettes sont fournis. Les lits sont faits à
            votre arrivée.
          </Text>
        </View>

        <View style={styles.faqItem}>
          <View style={styles.faqQuestion}>
            <HelpCircle size={20} color="#8B5A2B" />
            <Text style={styles.faqQuestionText}>
              Comment se déplacer sans voiture ?
            </Text>
          </View>
          <Text style={styles.faqAnswerText}>
            Une navette gratuite dessert le village et la station durant la
            saison d'hiver. En été, des bus relient Le Grand-Bornand aux
            villages voisins.
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F5F0',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  sectionTitle: {
    fontFamily: 'Lora-Bold',
    fontSize: 22,
    color: '#5D4037',
    marginBottom: 20,
  },
  mapContainer: {
    marginBottom: 20,
  },
  mapPlaceholder: {
    backgroundColor: '#E8F1F2',
    height: 180,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D1E3E5',
  },
  mapText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16,
    color: '#555555',
    marginTop: 8,
    marginBottom: 4,
  },
  addressContainer: {
    marginBottom: 20,
  },
  addressLabel: {
    fontFamily: 'Lora-Bold',
    fontSize: 16,
    color: '#8B5A2B',
    marginBottom: 8,
  },
  addressText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 15,
    lineHeight: 22,
    color: '#555555',
  },
  directionsContainer: {
    backgroundColor: '#F0E5D8',
    borderRadius: 8,
    padding: 16,
  },
  directionsTitle: {
    fontFamily: 'Lora-Bold',
    fontSize: 16,
    color: '#8B5A2B',
    marginBottom: 8,
  },
  directionsText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    lineHeight: 20,
    color: '#555555',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  contactText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    color: '#555555',
    marginLeft: 12,
  },
  scheduleItem: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  scheduleTextContainer: {
    marginLeft: 12,
    flex: 1,
  },
  scheduleTitle: {
    fontFamily: 'Lora-Bold',
    fontSize: 16,
    color: '#8B5A2B',
    marginBottom: 8,
  },
  scheduleText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    lineHeight: 20,
    color: '#555555',
  },
  faqItem: {
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  faqQuestion: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  faqQuestionText: {
    fontFamily: 'Lora-Bold',
    fontSize: 15,
    color: '#5D4037',
    marginLeft: 8,
    flex: 1,
  },
  faqAnswerText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    lineHeight: 20,
    color: '#555555',
    paddingLeft: 28,
  },
})
