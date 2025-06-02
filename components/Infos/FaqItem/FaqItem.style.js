import { StyleSheet } from 'react-native'
import { SIZES, COLORS } from '@/constants/theme'

const styles = StyleSheet.create({
  faqItem: {
    marginBottom: SIZES.sm,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.xxs,
    padding: SIZES.sm,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  faqQuestion: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SIZES.xxs,
  },
  faqQuestionText: {
    fontFamily: 'poppinsBold',
    fontSize: SIZES.sm,
    color: COLORS.primary,
    marginLeft: SIZES.xxs,
    flex: 1,
  },
  faqAnswerText: {
    fontFamily: 'interRegular',
    fontSize: SIZES.s,
    lineHeight: SIZES.md,
    color: COLORS.davyGrey,
    paddingLeft: SIZES.xl,
  },
})

export default styles
