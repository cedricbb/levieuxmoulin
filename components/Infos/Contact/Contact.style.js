import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '@/constants/theme'

const styles = StyleSheet.create({
    section: {
        padding: SIZES.md,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.cultured,
      },
      sectionTitle: {
        fontFamily: 'poppinsBold',
        fontSize: 22,
        color: COLORS.secondary,
        marginBottom: SIZES.md,
      },
      contactItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: SIZES.sm,
      },
      contactText: {
        fontFamily: 'interRegular',
        fontSize: SIZES.sm,
        color: COLORS.davyGrey,
        marginLeft: SIZES.xs,
      },
  })

export default styles