import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '@/constants/theme'

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SIZES.md,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  closeButton: {
    padding: SIZES.xs,
    borderRadius: SIZES.xxs,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  captionText: {
    fontFamily: 'interRegular',
    fontSize: SIZES.sm,
    color: COLORS.white,
    marginLeft: SIZES.sm,
    flex: 1,
  },
  imageViewerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullImage: {
    backgroundColor: 'transparent',
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
    borderRadius: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  disabledNavButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
})

export default styles