import { TouchableOpacity, Text } from 'react-native'
import styles from './Summer.style'

export default function Summer({ season, setSeason }) {
  return (
    <TouchableOpacity
        style={[
        styles.seasonButton,
        season === 'summer' && styles.seasonButtonActive,
        ]}
        onPress={() => setSeason('summer')}
    >
        <Text
        style={[
            styles.seasonButtonText,
            season === 'summer' && styles.seasonButtonTextActive,
        ]}
        >
        Été
        </Text>
    </TouchableOpacity>
  )
}