import { View, Text, Image, StyleSheet } from 'react-native'
import { images } from '@/assets/images/images'

type ActivityItemProps = {
  title: string
  description: string
  imageUrl: keyof typeof images
}

export default function ActivityItem({
  title,
  description,
  imageUrl,
}: ActivityItemProps) {
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

const styles = StyleSheet.create({
  activityItem: {
    marginBottom: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  activityTitle: {
    fontFamily: 'Lora-Bold',
    fontSize: 18,
    color: '#8B5A2B',
    marginBottom: 12,
  },
  activityImage: {
    width: '100%',
    height: 160,
    borderRadius: 8,
    marginBottom: 12,
  },
  activityDescription: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    lineHeight: 22,
    color: '#555555',
  },
})
