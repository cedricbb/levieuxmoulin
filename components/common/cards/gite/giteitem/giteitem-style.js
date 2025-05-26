import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  giteItem: {
    marginBottom: 12,
    backgroundColor: '#FFFFFF',
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
    color: '#8B5A2B',
    marginRight: 8,
    marginTop: 1,
  },
  bulletText: {
    flex: 1,
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    lineHeight: 22,
    color: '#555555',
  },
})

export default styles
