import { StyleSheet } from 'react-native'
import { COLORS } from '@/constants/theme'

const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontFamily: 'poppinsBold',
    fontSize: 24,
    color: COLORS.primary,
    marginBottom: 12,
  },
  description: {
    fontFamily: 'interRegular',
    fontSize: 15,
    lineHeight: 24,
    color: COLORS.davyGrey,
    marginBottom: 24,
  },
  closingText: {
    fontFamily: 'interRegular',
    fontSize: 15,
    fontStyle: 'italic',
    lineHeight: 22,
    color: COLORS.primary,
    marginBottom: 24,
    textAlign: 'center',
    padding: 16,
    backgroundColor: COLORS.tertiary,
    borderRadius: 8,
  },
})

export default styles
