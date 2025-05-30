import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Equipements.style'

export default function Equipements({ tab, setTab }) {
  return (
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
  )
}