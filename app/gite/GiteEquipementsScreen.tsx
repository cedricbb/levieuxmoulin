import React from 'react'
import { Text, ScrollView, StyleSheet } from 'react-native'

export default function GiteEquipementsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Le vieux Moulin</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F5F0',
  },
  title: {
    fontFamily: 'Lora-Bold',
    fontSize: 28,
    color: '#5D4037',
    marginBottom: 16,
    marginTop: 8,
  },
})
