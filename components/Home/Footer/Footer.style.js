import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '@/constants/theme'

const styles = StyleSheet.create({
  secondaryImage: {
    width: '100%',
    height: 200,
    borderRadius: SIZES.xxs,
    marginBottom: SIZES.lg,
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
    borderRadius: SIZES.xxs,
  },
})

export default styles
