import { TouchableOpacity, Text } from 'react-native'
import styles from './Winter.style'

export default function Winter({ season, setSeason }) {
  return (
    <TouchableOpacity
        style={[
        styles.seasonButton,
        season === 'winter' && styles.seasonButtonActive,
        ]}
        onPress={() => setSeason('winter')}
    >
        <Text
        style={[
            styles.seasonButtonText,
            season === 'winter' && styles.seasonButtonTextActive,
        ]}
        >
        Hiver
        </Text>
    </TouchableOpacity>
  )
}