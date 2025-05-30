import { TouchableOpacity } from 'react-native'
import { Image } from 'expo-image'
import styles from './GalleryImageItem.style'

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj['

export default function GalleryImageItem({ item, index, onPress }) {
  return (
    <TouchableOpacity
      style={styles.imageContainer}
      onPress={() => onPress(index)}
      activeOpacity={0.8}
    >
      <Image
        source={{ uri: item.url }}
        style={styles.thumbnailImage}
        contentFit="cover"
        transition={500}
        placeholder={blurhash}
      />
    </TouchableOpacity>
  )
}