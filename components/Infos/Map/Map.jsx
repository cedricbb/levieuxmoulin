import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { MapPin, ExternalLink } from 'lucide-react-native'
import { COLORS } from '@/constants/theme'
import styles from './Map.style'

export default function Map() {
  const openMap = () => {
    const address = 'Le Vieux Moulin, Chinaillon, Le Grand-Bornand, France'
    const url = `https://maps.google.com/?q=${encodeURIComponent(address)}`
    Linking.openURL(url)
  }

  return (
    <TouchableOpacity style={styles.mapContainer} onPress={openMap}>
        <View style={styles.mapPlaceholder}>
        <MapPin size={40} color={COLORS.primary} />
        <Text style={styles.mapText}>Ouvrir dans Google Maps</Text>
        <ExternalLink size={16} color={COLORS.primary} />
        </View>
    </TouchableOpacity>
  )
}
