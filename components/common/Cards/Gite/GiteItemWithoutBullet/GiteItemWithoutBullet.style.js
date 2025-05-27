import { StyleSheet } from 'react-native'
import { COLORS } from '@/constants/theme'

const styles = StyleSheet.create({
  giteItem: {
    marginBottom: 24,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    padding: 12,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Ignoré par React Native mais utile pour migration web
  },
  giteDescription: {
    fontFamily: 'interRegular',
    fontSize: 14,
    lineHeight: 22,
    color: COLORS.davyGrey,
  },
})

export default styles
