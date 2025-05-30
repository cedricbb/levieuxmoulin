import { Modal, SafeAreaView, View, Text, TouchableOpacity, useWindowDimensions } from 'react-native'
import { Image } from 'expo-image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react-native'
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated'
import { BlurView } from 'expo-blur'
import styles from './GalleryModal.style'
import { COLORS } from '@/constants/theme'

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj['

export default function GalleryModal({
  visible,
  onClose,
  images,
  selectedIndex,
  onNavigate,
}) {
  const { width, height } = useWindowDimensions()
  
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
        <BlurView intensity={100} tint="dark" style={StyleSheet.absoluteFill} />
        
        <Animated.View 
          style={styles.modalHeader}
          entering={FadeIn}
          exiting={FadeOut}
        >
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <X size={24} color={COLORS.white} />
          </TouchableOpacity>
          <Text style={styles.captionText}>
            {images[selectedIndex].caption}
          </Text>
        </Animated.View>

        <View style={styles.imageViewerContainer}>
          <Image
            source={{ uri: images[selectedIndex].url }}
            style={[styles.fullImage, { width, height: height * 0.7 }]}
            contentFit="contain"
            transition={300}
            placeholder={blurhash}
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