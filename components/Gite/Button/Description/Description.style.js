import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    giteButton: {
        flex: 1,
        paddingVertical: 16,
        alignItems: 'center',
      },
      giteButtonActive: {
        borderBottomWidth: 3,
        borderBottomColor: '#8B5A2B',
      },
      giteButtonText: {
        fontFamily: 'Lora-Regular',
        fontSize: 16,
        color: '#555555',
      },
      giteButtonTextActive: {
        fontFamily: 'Lora-Bold',
        color: '#8B5A2B',
      },
    })

export default styles