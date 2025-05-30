import { StyleSheet } from 'react-native'
import { SIZES } from '@/constants/theme'

const styles = StyleSheet.create({
  container: {
    padding: SIZES.md,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  imageWrapper: {
    marginBottom: 8,
  },
})

export default styles