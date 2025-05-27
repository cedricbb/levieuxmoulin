import { View } from 'react-native'
import styles from './HighLight.style'
import HighLightItem from './HighLightItem/HighLightItem'

export default function HighLight() {
  return (
    <View style={styles.highlightsContainer}>
      <HighLightItem
        title="Authenticité"
        text="Un gîte de caractère aux traditions savoyardes préservées"
      />
      <HighLightItem
        title="Confort"
        text="Des équipements modernes dans un écrin traditionnel"
      />
      <HighLightItem
        title="Emplacement"
        text="Idéalement situé pour profiter des activités en toutes saisons"
      />
    </View>
  )
}
