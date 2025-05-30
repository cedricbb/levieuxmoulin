import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native'
import { useState } from 'react'
import { useContent } from '@/hooks/useContent'
import LoadingScreen from '@/components/Ui/LoadingScreen'
import ErrorScreen from '@/components/Ui/ErrorScreen'
import GalleryList from '@/components/Gallery/GalleryList/GalleryList'
import GalleryModal from '@/components/Gallery/GalleryModal/GalleryModal'
import { COLORS } from '@/constants/theme'

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
  const [selectedImage, setSelectedImage] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)
  const { content, isLoading, error } = useContent('gallery')

  if (isLoading) return <LoadingScreen />
  if (error) return <ErrorScreen message={error} onRetry={() => {}} />

  const handleImagePress = (index) => {
    setSelectedImage(index)
    setModalVisible(true)
  }

  const handleNavigate = (direction) => {
    const newIndex = selectedImage !== null ? selectedImage + direction : 0
    if (newIndex >= 0 && newIndex < GALLERY_IMAGES.length) {
      setSelectedImage(newIndex)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Galerie Photos</Text>
      <Text style={styles.description}>
        Découvrez notre gîte à travers cette sélection de photos montrant
        l'intérieur, l'extérieur et les environs du Vieux Moulin.
      </Text>
      <GalleryList images={GALLERY_IMAGES} onImagePress={handleImagePress} />
      <GalleryModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        images={GALLERY_IMAGES}
        selectedIndex={selectedImage}
        onNavigate={handleNavigate}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.seashell,
    padding: 20,
  },
  title: {
    fontFamily: 'poppinsBold',
    fontSize: 24,
    color: COLORS.primary,
    marginBottom: 12,
  },
  description: {
    fontFamily: 'interRegular',
    fontSize: 15,
    lineHeight: 22,
    color: COLORS.davyGrey,
    marginBottom: 24,
  },
})
