import { FlatList } from 'react-native'
import GalleryImageItem from '../GalleryImageItem/GalleryImageItem'
import styles from './GalleryList.style'

export default function GalleryList({ images, onImagePress }) {
  return (
    <FlatList
      data={images}
      renderItem={({ item, index }) => (
        <GalleryImageItem item={item} index={index} onPress={onImagePress} />
      )}
      keyExtractor={(item) => item.id}
      numColumns={2}
      contentContainerStyle={styles.galleryContainer}
    />
  )
}
