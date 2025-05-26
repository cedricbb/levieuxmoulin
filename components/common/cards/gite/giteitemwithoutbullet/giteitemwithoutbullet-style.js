import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  giteItem: {
    marginBottom: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 12,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Ignoré par React Native mais utile pour migration web
  },
  giteDescription: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    lineHeight: 22,
    color: '#555555',
  },
})

export default styles
