import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native'
import { useState } from 'react'
import { useContent } from '@/hooks/useContent'
import LoadingScreen from '@/components/Ui/LoadingScreen'
import ErrorScreen from '@/components/Ui/ErrorScreen'
import ImagePicker from '@/components/Admin/ImagePicker'

export default function EditHomeScreen() {
  const { content, isLoading, error, updateContent } = useContent('home')

  const [title, setTitle] = useState('Bienvenue au Vieux Moulin')
  const [welcomeText, setWelcomeText] = useState(
    'Niché au cœur du Grand-Bornand Chinaillon, notre gîte authentique vous propose un séjour inoubliable dans un cadre chaleureux et montagnard. Profitez de la beauté des Alpes françaises dans ce havre de paix traditionnel et confortable.',
  )
  const [closingText, setClosingText] = useState(
    'Que ce soit pour des vacances en famille, entre amis ou en amoureux, Le Vieux Moulin vous accueille pour un séjour inoubliable au cœur des montagnes.',
  )
  const [heroImage, setHeroImage] = useState(
    'https://images.pexels.com/photos/3408355/pexels-photo-3408355.jpeg',
  )
  const [secondaryImage, setSecondaryImage] = useState(
    'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg',
  )

  const [highlights, setHighlights] = useState([
    {
      title: 'Authenticité',
      text: 'Un gîte de caractère aux traditions savoyardes préservées',
    },
    {
      title: 'Confort',
      text: 'Des équipements modernes dans un écrin traditionnel',
    },
    {
      title: 'Emplacement',
      text: 'Idéalement situé pour profiter des activités en toutes saisons',
    },
  ])

  const [isSaving, setIsSaving] = useState(false)

  if (isLoading) return <LoadingScreen />
  if (error) return <ErrorScreen message={error} onRetry={() => {}} />

  const updateHighlight = (index, field, value) => {
    const updatedHighlights = [...highlights]
    updatedHighlights[index] = {
      ...updatedHighlights[index],
      [field]: value,
    }
    setHighlights(updatedHighlights)
  }

  const handleSave = async () => {
    setIsSaving(true)

    try {
      // In a real app, this would save to your backend
      await updateContent({
        title,
        welcomeText,
        closingText,
        heroImage,
        secondaryImage,
        highlights,
      })

      Alert.alert('Succès', 'Les modifications ont été enregistrées.')
    } catch (error) {
      Alert.alert('Erreur', "Impossible d'enregistrer les modifications.")
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>Images</Text>

      <View style={styles.imageSection}>
        <Text style={styles.label}>Image d'en-tête</Text>
        <ImagePicker currentImage={heroImage} onImageSelected={setHeroImage} />

        <Text style={styles.label}>Image secondaire</Text>
        <ImagePicker
          currentImage={secondaryImage}
          onImageSelected={setSecondaryImage}
        />
      </View>

      <Text style={styles.sectionTitle}>Textes d'introduction</Text>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Titre de bienvenue</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          multiline={false}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Texte de bienvenue</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={welcomeText}
          onChangeText={setWelcomeText}
          multiline={true}
          numberOfLines={5}
          textAlignVertical="top"
        />
      </View>

      <Text style={styles.sectionTitle}>Points forts</Text>

      {highlights.map((highlight, index) => (
        <View key={index} style={styles.highlightContainer}>
          <Text style={styles.highlightNumber}>Point fort #{index + 1}</Text>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Titre</Text>
            <TextInput
              style={styles.input}
              value={highlight.title}
              onChangeText={(value) => updateHighlight(index, 'title', value)}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Description</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={highlight.text}
              onChangeText={(value) => updateHighlight(index, 'text', value)}
              multiline={true}
              numberOfLines={3}
              textAlignVertical="top"
            />
          </View>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Conclusion</Text>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Texte de conclusion</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={closingText}
          onChangeText={setClosingText}
          multiline={true}
          numberOfLines={4}
          textAlignVertical="top"
        />
      </View>

      <TouchableOpacity
        style={[styles.saveButton, isSaving && styles.saveButtonDisabled]}
        onPress={handleSave}
        disabled={isSaving}
      >
        <Text style={styles.saveButtonText}>
          {isSaving ? 'Enregistrement...' : 'Enregistrer les modifications'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F5F0',
    padding: 16,
  },
  sectionTitle: {
    fontFamily: 'Lora-Bold',
    fontSize: 18,
    color: '#5D4037',
    marginTop: 24,
    marginBottom: 16,
  },
  imageSection: {
    marginBottom: 16,
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
    color: '#555555',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  textArea: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  highlightContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  highlightNumber: {
    fontFamily: 'Lora-Bold',
    fontSize: 16,
    color: '#8B5A2B',
    marginBottom: 16,
  },
  saveButton: {
    backgroundColor: '#8B5A2B',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 40,
  },
  saveButtonDisabled: {
    backgroundColor: '#CCBBAA',
  },
  saveButtonText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16,
    color: '#FFFFFF',
  },
})
