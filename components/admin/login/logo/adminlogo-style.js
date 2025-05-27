import { StyleSheet } from 'react-native'
import { COLORS } from '@/constants/theme'

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  title: {
    fontFamily: 'poppinsBold',
    fontSize: 28,
    color: COLORS.primary,
  },
  subtitle: {
    fontFamily: 'poppinsSemiBold',
    fontSize: 18,
    color: COLORS.secondary,
    marginTop: 4,
  },
})

export default styles
