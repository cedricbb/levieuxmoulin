
import { StyleSheet } from 'react-native'
import { SIZES, COLORS } from '@/constants/theme'
import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
    },
    modalHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: SIZES.md,
    },
    closeButton: {
      padding: SIZES.xxs,
    },
    captionText: {
      fontFamily: 'interRegular',
      fontSize: SIZES.sm,
      color: COLORS.white,
      marginLeft: SIZES.xs,
      flex: 1,
    },
    imageViewerContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    fullImage: {
      width: width,
      height: height * 0.7,
    },
    navigationControls: {
      position: 'absolute',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      paddingHorizontal: SIZES.md,
    },
    navButton: {
      padding: SIZES.xs,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderRadius: 30,
    },
    disabledNavButton: {
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
  })

export default styles