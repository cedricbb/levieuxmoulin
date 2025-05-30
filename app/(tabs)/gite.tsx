import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import { useContent } from '@/hooks/useContent'
import LoadingScreen from '@/components/Ui/LoadingScreen'
import ErrorScreen from '@/components/Ui/ErrorScreen'
import { useState } from 'react'
import GiteDescription from '@/components/Gite/GiteDescription/GiteDescription'
import GiteEquipements from '@/components/Gite/GiteEquipements/GiteEquipements'
import { SIZES } from '@/constants/theme'

type GiteTab = 'description' | 'equipements'

export default function GiteScreen() {
  const [tab, setTab] = useState<GiteTab>('description')
  const { content, isLoading, error } = useContent('gite')

  if (isLoading) return <LoadingScreen />
  if (error) return <ErrorScreen message={error} onRetry={() => {}} />

  return (
    <View style={styles.container}>
      <View style={styles.giteToggle}>
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
        <TouchableOpacity
          style={[
            styles.giteButton,
            tab === 'equipements' && styles.giteButtonActive,
          ]}
          onPress={() => setTab('equipements')}
        >
          <Text
            style={[
              styles.giteButtonText,
              tab === 'equipements' && styles.giteButtonTextActive,
            ]}
          >
            Équipements
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.contentContainer}>
        {tab === 'description' ? <GiteDescription /> : <GiteEquipements />}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F5F0',
  },
  contentContainer: {
 paddingVertical: SIZES.xxl,
 paddingHorizontal: SIZES.lg,
  },
  giteToggle: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  giteButton: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
  },
  giteButtonActive: {
    borderBottomWidth: 3,
    borderBottomColor: '#8B5A2B',
  },
  giteButtonText: {
    fontFamily: 'interRegular',
    fontSize: 16,
    color: '#555555',
  },
  giteButtonTextActive: {
    fontFamily: 'outfitBold',
    color: '#8B5A2B',
  },
  subTitle: {
    fontFamily: 'outfitBold',
    fontSize: 18,
    color: '#8B5A2B',
    marginBottom: 8,
    marginTop: 16,
  },
  text: {
    fontFamily: 'interRegular',
    fontSize: 16,
    lineHeight: 24,
    color: '#333333',
    marginBottom: 16,
  },
})
