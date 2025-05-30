import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '@/constants/theme'

const styles = StyleSheet.create({
    giteButton: {
        flex: 1,
        paddingVertical: SIZES.sm,
        alignItems: 'center',
      },
      giteButtonActive: {
        borderBottomWidth: 3,
        borderBottomColor: COLORS.primary,
      },
      giteButtonText: {
        fontFamily: 'interRegular',
        fontSize: SIZES.sm,
        color: COLORS.davyGrey,
      },
      giteButtonTextActive: {
        fontFamily: 'interMedium',
        color: COLORS.primary,
      },
    })

export default styles