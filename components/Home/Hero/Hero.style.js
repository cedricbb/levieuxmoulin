import { StyleSheet } from 'react-native'
import { SIZES } from '@/constants/theme'

const styles = StyleSheet.create({
  heroContainer: {
    height: 300,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: SIZES.md,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  heroTitle: {
    fontFamily: 'outfitBold',
    fontSize: SIZES.xxl,
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  heroSubtitle: {
    fontFamily: 'outfitSemiBold',
    fontSize: SIZES.md,
    color: 'white',
    marginTop: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
})

export default styles
