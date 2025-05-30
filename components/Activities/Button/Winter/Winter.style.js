import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '@/constants/theme'

const styles = StyleSheet.create({
    seasonButton: {
    flex: 1,
    paddingVertical: SIZES.sm,
    alignItems: 'center',
  },
  seasonButtonActive: {
    borderBottomWidth: 3,
    borderBottomColor: COLORS.secondary,
  },
  seasonButtonText: {
    fontFamily: 'interRegular',
    fontSize: SIZES.md,
    color: COLORS.davyGrey,
  },
  seasonButtonTextActive: {
    fontFamily: 'interBold',
    color: COLORS.secondary,
  },
})

export default styles
