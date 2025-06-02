import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
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
    }
)

export default styles