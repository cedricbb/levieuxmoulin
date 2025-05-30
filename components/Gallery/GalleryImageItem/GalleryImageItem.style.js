import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '@/constants/theme'

const styles = StyleSheet.create({
  imageContainer: {
    aspectRatio: 1,
    borderRadius: SIZES.xs,
    overflow: 'hidden',
    backgroundColor: COLORS.cultured,
  },
  thumbnailImage: {
    width: '100%',
    height: '100%',
  },
})

export default styles