import { View, Text } from 'react-native'
import { HelpCircle } from 'lucide-react-native'
import styles from './FaqItem.style'
import { COLORS } from '@/constants/theme'

export default function FaqItem({
    question,
    answer,
}) {
  return (
    <View style={styles.faqItem}>
        <View style={styles.faqQuestion}>
            <HelpCircle size={20} color={COLORS.secondary} />
            <Text style={styles.faqQuestionText}>
                {question}
            </Text>
        </View>
        <Text style={styles.faqAnswerText}>
        {answer}
        </Text>
    </View>
  )
}