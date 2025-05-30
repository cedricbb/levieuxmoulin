import { TouchableOpacity, Text } from 'react-native'
import styles from './Description.style'

export default function DescriptionButton({ tab, setTab }) {
  return (
    <TouchableOpacity
        style={[
        styles.giteButton,
        tab === 'description' && styles.giteButtonActive,
        ]}
        onPress={() => setTab('description')}
    >
        <Text
        style={[
            styles.giteButtonText,
            tab === 'description' && styles.giteButtonTextActive,
        ]}
        >
        Description
        </Text>
    </TouchableOpacity>
  )
}