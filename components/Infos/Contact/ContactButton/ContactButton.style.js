import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '@/constants/theme'

const styles = StyleSheet.create({
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SIZES.xs,
  },
  contactText: {
    marginLeft: SIZES.xs,
    fontSize: SIZES.sm,
    color: COLORS.davyGrey,
  },
})

export default styles