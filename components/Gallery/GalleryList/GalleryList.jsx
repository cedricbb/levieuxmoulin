import { View, useWindowDimensions } from 'react-native'
import Animated, { FadeInDown } from 'react-native-reanimated'
import GalleryImageItem from '../GalleryImageItem/GalleryImageItem'
import styles from './GalleryList.style'

export default function GalleryList({ images, onImagePress }) {
  const { width } = useWindowDimensions()
  const numColumns = width > 768 ? 3 : 2
  const imageWidth = (width - 32 - (numColumns - 1) * 8) / numColumns

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {images.map((item, index) => (
          <Animated.View
            key={item.id}
            entering={FadeInDown.delay(index * 100)}
            style={[styles.imageWrapper, { width: imageWidth }]}
          >
            <GalleryImageItem
              item={item}
              index={index}
              onPress={onImagePress}
            />
          </Animated.View>
        ))}
      </View>
    </View>
  )
}