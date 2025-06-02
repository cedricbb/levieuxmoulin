import { StyleSheet } from 'react-native'
import { SIZES, COLORS } from '@/constants/theme'

const styles = StyleSheet.create({
  scheduleItem: {
    flexDirection: 'row',
    marginBottom: SIZES.md,
  },
  scheduleTextContainer: {
    marginLeft: SIZES.xs,
    flex: 1,
  },
  scheduleTitle: {
    fontFamily: 'poppinsBold',
    fontSize: SIZES.sm,
    color: COLORS.secondary,
    marginBottom: SIZES.xxs,
  },
  scheduleText: {
    fontFamily: 'interRegular',
    fontSize: SIZES.s,
    lineHeight: SIZES.md,
    color: COLORS.davyGrey,
  },
})

export default styles
