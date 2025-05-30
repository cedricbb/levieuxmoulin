
import { StyleSheet } from 'react-native'
import { SIZES, COLORS } from '@/constants/theme'

const styles = StyleSheet.create({
    imageContainer: {
      flex: 1,
      margin: 4,
      borderRadius: SIZES.xxs,
      overflow: 'hidden',
      backgroundColor: COLORS.white,
      shadowColor: COLORS.black,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 3,
    },
    thumbnailImage: {
      width: '100%',
      height: 160,
    },
  })

export default styles