import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  Modal,
  SafeAreaView,
} from 'react-native'
import { useState } from 'react'
import { useContent } from '@/hooks/useContent'
import LoadingScreen from '@/components/Ui/LoadingScreen'
import ErrorScreen from '@/components/Ui/ErrorScreen'
import { X, ChevronLeft, ChevronRight } from 'lucide-react-native'

const { width, height } = Dimensions.get('window')

// Mock gallery data
const GALLERY_IMAGES = [
  {
    id: '1',
    url: 'https://images.pexels.com/photos/3288102/pexels-photo-3288102.png',
    caption: 'Façade du chalet',
  },
  {
    id: '2',
    url: 'https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg',
    caption: 'Salon avec cheminée',
  },
  {
    id: '3',
    url: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
    caption: 'Chambre principale',
  },
  {
    id: '4',
    url: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg',
    caption: 'Vue depuis la terrasse',
  },
  {
    id: '5',
    url: 'https://images.pexels.com/photos/6782567/pexels-photo-6782567.jpeg',
    caption: 'Cuisine équipée',
  },
  {
    id: '6',
    url: 'https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg',
    caption: 'Salle à manger',
  },
  {
    id: '7',
    url: 'https://images.pexels.com/photos/6207494/pexels-photo-6207494.jpeg',
    caption: 'Chambre 2',
  },
  {
    id: '8',
    url: 'https://images.pexels.com/photos/3230517/pexels-photo-3230517.jpeg',
    caption: 'Environs en hiver',
  },
  {
    id: '9',
    url: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg',
    caption: 'Environs en été',
  },
  {
    id: '10',
    url: 'https://images.pexels.com/photos/756076/pexels-photo-756076.jpeg',
    caption: 'Grand-Bornand village',
  },
  {
    id: '11',
    url: 'https://images.pexels.com/photos/1058342/pexels-photo-1058342.jpeg',
    caption: 'Chemin de randonnée',
  },
  {
    id: '12',
    url: 'https://images.pexels.com/photos/1699020/pexels-photo-1699020.jpeg',
    caption: 'Ambiance hivernale',
  },
]

export default function GalleryScreen() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [modalVisible, setModalVisible] = useState(false)
  const { content, isLoading, error } = useContent('gallery')

  if (isLoading) return <LoadingScreen />
  if (error) return <ErrorScreen message={error} onRetry={() => {}} />

  const handleImagePress = (index: number) => {
    setSelectedImage(index)
    setModalVisible(true)
  }

  const navigateImage = (direction: number) => {
    const newIndex = selectedImage !== null ? selectedImage + direction : 0
    if (newIndex >= 0 && newIndex < GALLERY_IMAGES.length) {
      setSelectedImage(newIndex)
    }
  }

  const renderItem = ({ item, index }: { item: any; index: number }) => (
    <TouchableOpacity
      style={styles.imageContainer}
      onPress={() => handleImagePress(index)}
    >
      <Image
        source={{ uri: item.url }}
        style={styles.thumbnailImage}
        resizeMode="cover"
      />
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Galerie Photos</Text>

      <Text style={styles.description}>
        Découvrez notre gîte à travers cette sélection de photos montrant
        l'intérieur, l'extérieur et les environs du Vieux Moulin.
      </Text>

      <FlatList
        data={GALLERY_IMAGES}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.galleryContainer}
      />

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <X size={24} color="#FFFFFF" />
            </TouchableOpacity>
            <Text style={styles.captionText}>
              {selectedImage !== null && GALLERY_IMAGES[selectedImage].caption}
            </Text>
          </View>

          <View style={styles.imageViewerContainer}>
            {selectedImage !== null && (
              <Image
                source={{ uri: GALLERY_IMAGES[selectedImage].url }}
                style={styles.fullImage}
                resizeMode="contain"
              />
            )}

            <View style={styles.navigationControls}>
              <TouchableOpacity
                style={[
                  styles.navButton,
                  selectedImage === 0 && styles.disabledNavButton,
                ]}
                onPress={() => navigateImage(-1)}
                disabled={selectedImage === 0}
              >
                <ChevronLeft
                  size={36}
                  color={selectedImage === 0 ? '#999999' : '#FFFFFF'}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.navButton,
                  selectedImage === GALLERY_IMAGES.length - 1 &&
                    styles.disabledNavButton,
                ]}
                onPress={() => navigateImage(1)}
                disabled={selectedImage === GALLERY_IMAGES.length - 1}
              >
                <ChevronRight
                  size={36}
                  color={
                    selectedImage === GALLERY_IMAGES.length - 1
                      ? '#999999'
                      : '#FFFFFF'
                  }
                />
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F5F0',
    padding: 20,
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
    lineHeight: 22,
    color: '#555555',
    marginBottom: 24,
  },
  galleryContainer: {
    paddingBottom: 20,
  },
  imageContainer: {
    flex: 1,
    margin: 4,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  thumbnailImage: {
    width: '100%',
    height: 160,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  closeButton: {
    padding: 8,
  },
  captionText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16,
    color: '#FFFFFF',
    marginLeft: 12,
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
    paddingHorizontal: 16,
  },
  navButton: {
    padding: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 30,
  },
  disabledNavButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
})
