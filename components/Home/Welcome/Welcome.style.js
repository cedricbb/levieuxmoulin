import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '@/constants/theme'

const styles = StyleSheet.create({
      welcomeTitle: {
        fontFamily: 'outfitBold',
        fontSize: SIZES.lg,
        color: COLORS.primary,
        marginBottom: SIZES.sm,
      },
      welcomeText: {
        fontFamily: 'interRegular',
        fontSize: SIZES.sm,
        lineHeight: SIZES.lg,
        color: COLORS.davyGrey,
        marginBottom: SIZES.xxl,
      },
    })

export default styles