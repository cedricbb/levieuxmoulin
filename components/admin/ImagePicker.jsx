import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native'
import { useEffect, useState } from 'react'
import * as ImagePickerExpo from 'expo-image-picker'
import { X, Upload, Image as ImageIcon } from 'lucide-react-native'

export default function ImagePicker({ currentImage, onImageSelected }) {
  const [image, setImage] = useState(currentImage)

  useEffect(() => {
    setImage(currentImage)
  }, [currentImage])

  const pickImage = async () => {
    // Request permissions
    if (Platform.OS !== 'web') {
      const { status } =
        await ImagePickerExpo.requestMediaLibraryPermissionsAsync()
      if (status !== 'granted') {
        Alert.alert(
          'Permission refusée',
          'Nous avons besoin de votre permission pour accéder à vos photos.',
        )
        return
      }
    }

    try {
      const result = await ImagePickerExpo.launchImageLibraryAsync({
        mediaTypes: ImagePickerExpo.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [16, 9],
        quality: 0.8,
      })

      if (!result.canceled) {
        // In a real app, you would upload the image to a server here
        // For this demo, we'll just set the local URI
        setImage(result.assets[0].uri)
        onImageSelected(result.assets[0].uri)
      }
    } catch (error) {
      Alert.alert('Erreur', "Impossible de sélectionner l'image.")
    }
  }

  const removeImage = () => {
    // In a real app, you might want to confirm this action
    setImage(null)
    onImageSelected('')
  }

  return (
    <View style={styles.container}>
      {image ? (
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: image }}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.imageActions}>
            <TouchableOpacity style={styles.changeButton} onPress={pickImage}>
              <Upload size={16} color="#FFFFFF" />
              <Text style={styles.changeButtonText}>Changer</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.removeButton} onPress={removeImage}>
              <X size={16} color="#FFFFFF" />
              <Text style={styles.removeButtonText}>Supprimer</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.placeholderContainer}
          onPress={pickImage}
        >
          <ImageIcon size={40} color="#8B5A2B" />
          <Text style={styles.placeholderText}>Sélectionner une image</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  imageContainer: {
    position: 'relative',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#E0E0E0',
  },
  image: {
    width: '100%',
    height: 200,
  },
  imageActions: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    padding: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  changeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#8B5A2B',
    borderRadius: 4,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 8,
  },
  changeButtonText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 12,
    color: '#FFFFFF',
    marginLeft: 4,
  },
  removeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C62828',
    borderRadius: 4,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  removeButtonText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 12,
    color: '#FFFFFF',
    marginLeft: 4,
  },
  placeholderContainer: {
    height: 200,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#E0E0E0',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  placeholderText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    color: '#8B5A2B',
    marginTop: 8,
  },
})
