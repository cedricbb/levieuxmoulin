import { TouchableOpacity, Image } from 'react-native'
import styles from './GalleryImageItem.style'

export default function GalleryImageItem({ item, index, onPress }) {
  return (
    <TouchableOpacity
      style={styles.imageContainer}
      onPress={() => onPress(index)}
    >
      <Image
        source={{ uri: item.url }}
        style={styles.thumbnailImage}
        resizeMode="cover"
      />
    </TouchableOpacity>
  )
}