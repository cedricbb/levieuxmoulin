import { View, Text, Image } from 'react-native'
import { images } from '../../../../../constants/images'
import styles from './ActivityItem.style'

export default function ActivityItem({ title, description, imageUrl }) {
  return (
    <View style={styles.activityItem}>
      <Text style={styles.activityTitle}>{title}</Text>
      <Image
        source={images[imageUrl]}
        style={styles.activityImage}
        resizeMode="cover"
      />
      <Text style={styles.activityDescription}>{description}</Text>
    </View>
  )
}
