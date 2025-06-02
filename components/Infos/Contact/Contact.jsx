import { View, Text, Linking } from 'react-native'
import styles from './Contact.style'
import { Phone, Mail } from 'lucide-react-native'
import ContactButton from './ContactButton/ContactButton'

export default function Contact() {

    const makePhoneCall = () => {
        Linking.openURL('tel:+33612345678')
      }

      const sendEmail = () => {
        Linking.openURL(
          'mailto:contact@levieuxmoulin-chinaillon.fr'
        )
      }

  return (
    <View style={styles.section}>
    <Text style={styles.sectionTitle}>Contact</Text>
    <ContactButton icon={Phone} text="+33 6 12 34 56 78" onPress={makePhoneCall} />
    <ContactButton icon={Mail} text="contact@levieuxmoulin-chinaillon.fr" onPress={sendEmail} />
  </View>
  )
}