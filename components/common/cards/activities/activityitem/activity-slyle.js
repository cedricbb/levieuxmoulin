import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  activityItem: {
    marginBottom: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  activityTitle: {
    fontFamily: 'Lora-Bold',
    fontSize: 18,
    color: '#8B5A2B',
    marginBottom: 12,
  },
  activityImage: {
    width: '100%',
    height: 160,
    borderRadius: 8,
    marginBottom: 12,
  },
  activityDescription: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    lineHeight: 22,
    color: '#555555',
  },
})

export default styles
