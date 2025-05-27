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
        fontSize: SIZES.sm,
        fontStyle: 'italic',
        lineHeight: SIZES.lg,
        color: COLORS.primary,
        marginBottom: SIZES.lg,
      },
})

export default styles
