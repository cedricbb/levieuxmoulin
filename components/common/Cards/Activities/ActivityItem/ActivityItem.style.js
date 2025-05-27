import { StyleSheet } from 'react-native'
import { COLORS } from '@/constants/theme'

const styles = StyleSheet.create({
  activityItem: {
    marginBottom: 24,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    padding: 16,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  activityTitle: {
    fontFamily: 'poppinsBold',
    fontSize: 18,
    color: COLORS.secondary,
    marginBottom: 12,
  },
  activityImage: {
    width: '100%',
    height: 160,
    borderRadius: 8,
    marginBottom: 12,
  },
  activityDescription: {
    fontFamily: 'interRegular',
    fontSize: 14,
    lineHeight: 22,
    color: COLORS.davyGrey,
  },
})

export default styles
