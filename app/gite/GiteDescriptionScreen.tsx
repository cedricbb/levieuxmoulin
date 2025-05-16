import React from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'

export default function GiteDescriptionScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Le vieux Moulin</Text>
      <Text style={styles.subtitle}>Un chalet haut-savoyard typique au pied des pistes de ski</Text>
      <Text style={styles.text}>
        34 places en gestion libre, pour une ambiance conviviale et chaleureuse en famille ou entre amis. Ouvert toute l'année.
        {"\n\n"}
        Ses atouts :
        {"\n"}- 280 m², 1 grande salle modulable (70m²), 7 chambres et une grande terrasse
        {"\n"}- Proximité du village, commerces et restaurants
        {"\n"}- Proximité pistes de ski, sentiers de randonnée, activités d'été
        {"\n"}- 100m des pistes, 30m arrêt navette, 300m des commerces
      </Text>
      <Text style={styles.sectionTitle}>
        Une grande terrasseextérieure
      </Text>
      <Text style={styles.text}>
        Notre chalet possède une grande terrasse utilisable été comme hiver pour des moments conviviaux en plein air.
      </Text>
      <Text style={styles.sectionTitle}>
        La salle de séjour
      </Text>
      <Text style={styles.text}>
        Grande pièce utilisable lors des séjours en salle à manger, salon et coin TV.
        {"\n"}Sa taille et le mobilier à disposition permettent d’accueillir :
        {"\n"}- Repas familiaux ou entre amis (40 places assises)
        {"\n"}- Fêtes en mode buffet (60 personnes + 40 si terrasse)
        {"\n"}- Réunions de travail ou d’information (20-25 personnes)
        {"\n"}- Conférences (50 personnes)
      </Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 8,
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 16,
    marginTop: 16,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 15,
    color: '#333333',
    marginBottom: 8,
  },
})