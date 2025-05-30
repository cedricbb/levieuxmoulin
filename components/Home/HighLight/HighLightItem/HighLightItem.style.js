import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '@/constants/theme'

const styles = StyleSheet.create({
  highlightItem: {
    marginBottom: SIZES.md,
    padding: SIZES.md,
    borderRadius: SIZES.sm,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // for Android shadow
  },
  highlightTitle: {
    fontFamily: 'outfitSemiBold',
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
