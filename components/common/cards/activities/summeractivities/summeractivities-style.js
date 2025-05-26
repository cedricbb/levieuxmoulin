import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontFamily: 'Lora-Bold',
    fontSize: 24,
    color: '#5D4037',
    marginBottom: 12,
  },
  description: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 15,
    lineHeight: 24,
    color: '#333333',
    marginBottom: 24,
  },
  closingText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 15,
    fontStyle: 'italic',
    lineHeight: 22,
    color: '#5D4037',
    marginBottom: 24,
    textAlign: 'center',
    padding: 16,
    backgroundColor: '#F0E5D8',
    borderRadius: 8,
  },
})

export default styles
