import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '@/constants/theme'

const styles = StyleSheet.create({
  highlightItem: {
    marginBottom: SIZES.md,
  },
  highlightTitle: {
    fontFamily: 'poppinsSemiBold',
    fontSize: SIZES.ml,
    color: COLORS.secondary,
    marginBottom: SIZES.xxs,
  },
  highlightText: {
    fontFamily: 'interRegular',
    fontSize: 15,
    lineHeight: 22,
    color: COLORS.davyGrey,
  },
})

export default styles
