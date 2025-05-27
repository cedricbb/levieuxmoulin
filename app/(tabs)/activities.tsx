import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native'
import { useState } from 'react'
import { useContent } from '@/hooks/useContent'
import LoadingScreen from '@/components/Ui/LoadingScreen'
import ErrorScreen from '@/components/Ui/ErrorScreen'
import SummerActivities from '@/components/common/Cards/Activities/summeractivities/SummerActivities'
import WinterActivities from '@/components/common/Cards/Activities/winteractivities/WinterActivities'

type Season = 'winter' | 'summer'

export default function ActivitiesScreen() {
  const [season, setSeason] = useState<Season>('winter')
  const { content, isLoading, error } = useContent('activities')

  if (isLoading) return <LoadingScreen />
  if (error) return <ErrorScreen message={error} onRetry={() => {}} />

  return (
    <View style={styles.container}>
      <View style={styles.seasonToggle}>
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
  seasonButton: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
  },
  seasonButtonActive: {
    borderBottomWidth: 3,
    borderBottomColor: '#8B5A2B',
  },
  seasonButtonText: {
    fontFamily: 'Lora-Regular',
    fontSize: 16,
    color: '#555555',
  },
  seasonButtonTextActive: {
    fontFamily: 'Lora-Bold',
    color: '#8B5A2B',
  },
  contentContainer: {
    padding: 20,
  },
})
