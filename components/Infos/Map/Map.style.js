import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '@/constants/theme'

const styles = StyleSheet.create({
    
    mapContainer: {
        marginBottom: SIZES.md,
      },
      mapPlaceholder: {
        backgroundColor: COLORS.brightGray,
        height: 180,
        borderRadius: SIZES.xxs,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.gainsboro,
      },
      mapText: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: SIZES.sm,
        color: COLORS.davyGrey,
        marginTop: SIZES.sm,
        marginBottom: 4,
      },
    })

export default styles