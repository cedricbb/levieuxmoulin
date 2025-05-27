import { StyleSheet } from 'react-native'
import { COLORS } from '@/constants/theme'

const styles = StyleSheet.create({
  giteItem: {
    marginBottom: 12,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    padding: 12,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Ignoré par React Native mais utile pour migration web
  },
  bulletItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  bulletPoint: {
    fontSize: 18,
    lineHeight: 22,
    color: COLORS.secondary,
    marginRight: 8,
    marginTop: 1,
  },
  bulletText: {
    flex: 1,
    fontFamily: 'interRegular',
    fontSize: 14,
    lineHeight: 22,
    color: COLORS.davyGrey,
  },
})

export default styles
