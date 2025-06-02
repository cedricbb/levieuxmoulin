import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '@/constants/theme'

const styles = StyleSheet.create({
    directionsContainer: {
        backgroundColor: COLORS.tertiary,
        borderRadius: SIZES.xxs,
        padding: SIZES.sm,
      },
      directionsTitle: {
        fontFamily: 'poppinsBold',
        fontSize: SIZES.sm,
        color: COLORS.secondary,
        marginBottom: SIZES.xxs,
      },
      directionsText: {
        fontFamily: 'interRegular',
        fontSize: SIZES.s,
        lineHeight: SIZES.md,
        color: COLORS.davyGrey,
      },
    })

export default styles