import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '@/constants/theme'

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.xs,
    padding: SIZES.lg,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: SIZES.s,
    color: COLORS.davyGrey,
    marginBottom: SIZES.xxs,
  },
  input: {
    backgroundColor: COLORS.cultured,
    borderRadius: SIZES.xxs,
    paddingHorizontal: SIZES.sm,
    paddingVertical: SIZES.xs,
    marginBottom: SIZES.sm,
    fontFamily: 'OpenSans-Regular',
    fontSize: SIZES.sm,
  },
  passwordContainer: {
    position: 'relative',
    marginBottom: SIZES.lg,
  },
  passwordInput: {
    backgroundColor: COLORS.cultured,
    borderRadius: SIZES.xxs,
    paddingHorizontal: SIZES.sm,
    paddingVertical: SIZES.xs,
    paddingRight: 48,
    fontFamily: 'OpenSans-Regular',
    fontSize: SIZES.sm,
  },
  eyeButton: {
    position: 'absolute',
    right: SIZES.sm,
    top: SIZES.s,
  },
  loginButton: {
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.xxs,
    paddingVertical: SIZES.s,
    alignItems: 'center',
  },
  loginButtonDisabled: {
    backgroundColor: COLORS.darkvanilla,
  },
  loginButtonText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: SIZES.sm,
    color: COLORS.white,
  },
})

export default styles
