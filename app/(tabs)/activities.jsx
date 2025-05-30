import {
  View,
  StyleSheet,
  ScrollView,
} from 'react-native'
import { useState } from 'react'
import { useContent } from '@/hooks/useContent'
import LoadingScreen from '@/components/Ui/LoadingScreen'
import ErrorScreen from '@/components/Ui/ErrorScreen'
import Summer from '@/components/Activities/Button/Summer/Summer'
import Winter from '@/components/Activities/Button/Winter/Winter'
import SummerActivities from '@/components/common/Cards/Activities/summeractivities/SummerActivities'
import WinterActivities from '@/components/common/Cards/Activities/winteractivities/WinterActivities'

export default function ActivitiesScreen() {
  const [season, setSeason] = useState('winter')
  const { content, isLoading, error } = useContent('activities')

  if (isLoading) return <LoadingScreen />
  if (error) return <ErrorScreen message={error} onRetry={() => {}} />

  return (
    <View style={styles.container}>
      <View style={styles.seasonToggle}>
        <Winter season={season} setSeason={setSeason} />
        <Summer season={season} setSeason={setSeason} />
      </View>

      <ScrollView style={styles.contentContainer}>
        {season === 'winter' ? <WinterActivities /> : <SummerActivities />}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F5F0',
  },
  seasonToggle: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  contentContainer: {
    padding: 20,
  },
})
