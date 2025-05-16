import { View, Text, StyleSheet } from "react-native";
import GiteItem from "../card/GiteItem";
import GiteItemWithoutBullet from "../card/GitItemWithoutBullet";

export default function GiteDescription() {
  return (
    <View>
      <Text style={styles.title}>Le vieux Moulin</Text>
      <Text style={styles.subTitle}>Un chalet haut-savoyard typique au pied des pistes de ski</Text>
      <Text style={styles.text}>
        34 places en gestion libre, pour une ambiance conviviale et chaleureuse en famille ou entre amis. Ouvert toute l'année.
      </Text>
      <Text style={styles.subTitle}>
        Ses atouts :
      </Text>
      <GiteItem
        description={`
          280 m², 1 grande salle modulable (70m²)
          7 chambres et une grande terrasse
          Proximité du village, commerces et restaurants
          Proximité pistes de ski, sentiers de randonnée
          Activités d'été
          100m des pistes, 30m arrêt navette
          300m des commerces`
        }
      />
      <Text style={styles.subTitle}>
        Une grande terrasse extérieure
      </Text>
      <GiteItemWithoutBullet
        description="Notre chalet possède une grande terrasse utilisable été comme hiver pour des moments conviviaux en plein air."
      />
      <Text style={styles.subTitle}>
        La salle de séjour
      </Text>
      <GiteItem
        description={`
          Repas familiaux ou entre amis (40 places assises)
          Fêtes en mode buffet (60 personnes + 40 si terrasse)
          Réunions de travail ou d’information (20-25 personnes)
          Conférences (50 personnes)
        `}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Lora-Bold',
    fontSize: 32,
    color: '#5D4037',
    marginBottom: 8,
    marginTop: 16,
    textAlign: 'left',
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
});