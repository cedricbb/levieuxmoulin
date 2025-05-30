import { StyleSheet, Dimensions } from 'react-native'
import { COLORS, SIZES } from '@/constants/theme'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  heroContainer: {
    height: width * 0.8,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '50%',
  },
  heroContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: SIZES.lg,
  },
  heroTitle: {
    fontFamily: 'poppinsBold',
    fontSize: SIZES.xxl,
    color: COLORS.white,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  heroSubtitle: {
    fontFamily: 'poppinsSemiBold',
    fontSize: SIZES.md,
    color: COLORS.white,
    marginTop: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  heroDescription: {
    fontFamily: 'interRegular',
    fontSize: SIZES.md,
    color: COLORS.white,
    marginTop: SIZES.sm,
    opacity: 0.9,
  },
})

export default styles