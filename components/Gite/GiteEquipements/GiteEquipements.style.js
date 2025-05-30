import { StyleSheet } from 'react-native'
import { COLORS } from '@/constants/theme'

const styles = StyleSheet.create({
  title: {
    fontFamily: 'outfitBold',
    fontSize: 32,
    color: COLORS.primary,
    marginBottom: 8,
    marginTop: 16,
    textAlign: 'left',
  },
  subTitle: {
    fontFamily: 'poppinsBold',
    fontSize: 18,
    color: COLORS.secondary,
    marginBottom: 8,
    marginTop: 16,
  },
  text: {
    fontFamily: 'interRegular',
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.davyGrey,
    marginBottom: 16,
  },
})

export default styles
