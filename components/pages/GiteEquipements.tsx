import { View, Text, StyleSheet } from "react-native";
import GiteItem from "../card/GiteItem";
import GiteItemWithoutBullet from "../card/GitItemWithoutBullet";
import Spacer from "../ui/Spacer";
import { Bed, Utensils, Wifi, SquareParking, Snowflake, Armchair, Fence, Baby } from 'lucide-react-native';

export default function GiteEquipements() {
  return (
    <View>
      <Text style={styles.title}>Equipements</Text>
      <Text style={styles.subTitle}>
        <Utensils size={16} color="#8B5A2B" /> Cuisine
      </Text>
      <GiteItem
        description={`
          Cuisinière à gaz
          Four éléctrique
          Lave vaisselle
          2 réfrigérateurs
          Congélateur
          Cafetière, Bouilloire, Grille-pain
          Micro-ondes
          `
        }
      />
      <Text style={styles.subTitle}>
        <Armchair size={16} color="#8B5A2B" /> Salle de séjour
      </Text>
      <GiteItem
        description={`
          Grandes tables, petites tables
          Chaises, tabourets, bancs
          Canapés
          Buffet
          Porte manteaux
          TV
          `
        }
      />
      <Text style={styles.subTitle}>
        <Bed size={16} color="#8B5A2B" /> Chambres
      </Text>
      <GiteItem
        description={`
          Lits simples ou superposés
          Literie de bonne qualité
          Matelas confortables
          Canapés
          `
        }
      />
      <Text style={styles.subTitle}>
        <Baby size={16} color="#8B5A2B" /> Kit bébé
      </Text>
      <GiteItem
        description={`
          Chaise haute
          Lit parapluie
          Baignoire
          `
        }
      />
      <Text style={styles.subTitle}>
        <Fence size={16} color="#8B5A2B" /> Terrasse
      </Text>
      <GiteItem
        description={`
          Tables
          Chaises
          Parasols
          Barbecue
          `
        }
      />
      <Text style={styles.subTitle}>
        <Wifi size={16} color="#8B5A2B" /> Wifi
      </Text>
      <GiteItem
        description={`
          Accès gratuit à internet (intérieur et terrasse)
          `
        }
      />
      <Text style={styles.subTitle}>
        <SquareParking size={16} color="#8B5A2B" /> Parking gratuit
      </Text>
      <GiteItem
        description={`
          Nombreuses places de parking
          7 places privatives
          1 PMR devant le chalet
          Parking autocars à proximité
          `
        }
      />
      <Text style={styles.subTitle}>
        <Snowflake size={16} color="#8B5A2B" /> Local à ski
      </Text>
      <GiteItem
        description={`
          Local à ski à votre disposition
          `
        }
      />
      <Spacer size={24} />
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