import { Modal, SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native'
import { X, ChevronLeft, ChevronRight } from 'lucide-react-native'
import styles from './GalleryModal.style'
import { COLORS } from '@/constants/theme'

export default function GalleryModal({
  visible,
  onClose,
  images,
  selectedIndex,
  onNavigate,
}) {
  if (selectedIndex === null) return null
  const isFirst = selectedIndex === 0
  const isLast = selectedIndex === images.length - 1

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <SafeAreaView style={styles.modalContainer}>
        <View style={styles.modalHeader}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <X size={24} color={COLORS.white} />
          </TouchableOpacity>
          <Text style={styles.captionText}>
            {images[selectedIndex].caption}
          </Text>
        </View>

        <View style={styles.imageViewerContainer}>
          <Image
            source={{ uri: images[selectedIndex].url }}
            style={styles.fullImage}
            resizeMode="contain"
          />
          <View style={styles.navigationControls}>
            <TouchableOpacity
              style={[styles.navButton, isFirst && styles.disabledNavButton]}
              onPress={() => onNavigate(-1)}
              disabled={isFirst}
            >
              <ChevronLeft size={36} color={isFirst ? COLORS.spanishGray : COLORS.white} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.navButton, isLast && styles.disabledNavButton]}
              onPress={() => onNavigate(1)}
              disabled={isLast}
            >
              <ChevronRight size={36} color={isLast ? COLORS.spanishGray : COLORS.white} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  )
}
