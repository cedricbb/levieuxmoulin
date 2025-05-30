import {
  View,
  StyleSheet,
  ScrollView,
} from 'react-native'
import { useContent } from '@/hooks/useContent'
import LoadingScreen from '@/components/Ui/LoadingScreen'
import ErrorScreen from '@/components/Ui/ErrorScreen'
import { useState } from 'react'
import GiteDescription from '@/components/Gite/GiteDescription/GiteDescription'
import GiteEquipements from '@/components/Gite/GiteEquipements/GiteEquipements'
import DescriptionButton from '@/components/Gite/Button/Description/Description'
import EquipementsButton from '@/components/Gite/Button/Equipements/Equipements'
import Spacer from '@/components/Ui/Spacer'

export default function GiteScreen() {
  const [tab, setTab] = useState('description')
  const { content, isLoading, error } = useContent('gite')

  if (isLoading) return <LoadingScreen />
  if (error) return <ErrorScreen message={error} onRetry={() => {}} />

  return (
    <View style={styles.container}>
      <View style={styles.giteToggle}>
        <DescriptionButton tab={tab} setTab={setTab} />
        <EquipementsButton tab={tab} setTab={setTab} />
      </View>
      <ScrollView style={styles.contentContainer}>
        {tab === 'description' ? <GiteDescription /> : <GiteEquipements />}
      </ScrollView>
      <Spacer height={72} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F5F0',
  },
  contentContainer: {
    padding: 24,
  },
  giteToggle: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  subTitle: {
    fontFamily: 'Lora-Bold',
    fontSize: 18,
    color: '#8B5A2B',
    marginBottom: 8,
    marginTop: 16,
  },
  text: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    lineHeight: 24,
    color: '#333333',
    marginBottom: 16,
  },
})
