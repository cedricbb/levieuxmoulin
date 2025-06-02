import { View, Text } from 'react-native'
import styles from './ScheduleItem.style'

export default function ScheduleItem({icon: Icon, iconColor = "#8B5A2B", title, lines}) {
  return (
    <View style={styles.scheduleItem}>
        <Icon size={24} color={iconColor} />
        <View style={styles.scheduleTextContainer}>
            <Text style={styles.scheduleTitle}>{title}</Text>
            {lines.map((line, index) => (
                <Text key={index} style={styles.scheduleText}>{line}</Text>
            ))}
        </View>
    </View>
  )
}