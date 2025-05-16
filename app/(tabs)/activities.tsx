import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useContent } from '@/hooks/useContent';
import LoadingScreen from '@/components/ui/LoadingScreen';
import ErrorScreen from '@/components/ui/ErrorScreen';

type Season = 'winter' | 'summer';

export default function ActivitiesScreen() {
  const [season, setSeason] = useState<Season>('winter');
  const { content, isLoading, error } = useContent('activities');
  
  if (isLoading) return <LoadingScreen />;
  if (error) return <ErrorScreen message={error} />;
  
  return (
    <View style={styles.container}>
      <View style={styles.seasonToggle}>
        <TouchableOpacity
          style={[styles.seasonButton, season === 'winter' && styles.seasonButtonActive]}
          onPress={() => setSeason('winter')}
        >
          <Text style={[styles.seasonButtonText, season === 'winter' && styles.seasonButtonTextActive]}>
            Hiver
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.seasonButton, season === 'summer' && styles.seasonButtonActive]}
          onPress={() => setSeason('summer')}
        >
          <Text style={[styles.seasonButtonText, season === 'summer' && styles.seasonButtonTextActive]}>
            Été
          </Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.contentContainer}>
        {season === 'winter' ? (
          <WinterActivities />
        ) : (
          <SummerActivities />
        )}
      </ScrollView>
    </View>
  );
}

function WinterActivities() {
  return (
    <View>
      <Image 
        source={{ uri: 'https://images.pexels.com/photos/376697/pexels-photo-376697.jpeg' }}
        style={styles.headerImage}
        resizeMode="cover"
      />
      
      <Text style={styles.title}>Activités d'Hiver</Text>
      
      <Text style={styles.description}>
        Le Grand-Bornand est une destination idéale pour les amateurs de sports d'hiver. Avec ses
        nombreuses pistes adaptées à tous les niveaux et ses infrastructures modernes, la station
        vous propose une multitude d'activités pour profiter pleinement de votre séjour hivernal.
      </Text>
      
      <ActivityItem 
        title="Ski Alpin"
        description="Profitez des 84 km de pistes répartis sur 43 pistes pour tous niveaux. Le domaine skiable s'étend de 1000m à 2100m d'altitude avec 31 remontées mécaniques."
        imageUrl="https://images.pexels.com/photos/848618/pexels-photo-848618.jpeg"
      />
      
      <ActivityItem 
        title="Ski de Fond"
        description="60 km de pistes balisées dans un cadre féérique. Parcourez les plateaux nordiques de la vallée du Bouchet et découvrez des paysages à couper le souffle."
        imageUrl="https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg"
      />
      
      <ActivityItem 
        title="Raquettes"
        description="De nombreux sentiers balisés pour découvrir la montagne autrement. Plusieurs parcours thématiques permettent d'explorer la faune et la flore hivernales."
        imageUrl="https://images.pexels.com/photos/356808/pexels-photo-356808.jpeg"
      />
      
      <ActivityItem 
        title="Luge et Activités Ludiques"
        description="Une piste de luge sécurisée pour le plaisir des petits et des grands. Profitez également d'un espace ludique avec des animations pour toute la famille."
        imageUrl="https://images.pexels.com/photos/257961/pexels-photo-257961.jpeg"
      />
      
      <Text style={styles.closingText}>
        Le Vieux Moulin est situé à seulement 300m des pistes, vous permettant d'accéder 
        facilement au domaine skiable pour profiter pleinement de vos journées sur les pistes.
      </Text>
    </View>
  );
}

function SummerActivities() {
  return (
    <View>
      <Image 
        source={{ uri: 'https://images.pexels.com/photos/2577274/pexels-photo-2577274.jpeg' }}
        style={styles.headerImage}
        resizeMode="cover"
      />
      
      <Text style={styles.title}>Activités d'Été</Text>
      
      <Text style={styles.description}>
        En été, Le Grand-Bornand se transforme en un véritable paradis pour les amateurs 
        d'activités de plein air. Les paysages verdoyants offrent un cadre exceptionnel 
        pour de nombreuses activités sportives et de détente.
      </Text>
      
      <ActivityItem 
        title="Randonnée Pédestre"
        description="Plus de 300 km de sentiers balisés pour tous niveaux. Découvrez les alpages, les sommets et les lacs de montagne dans un environnement préservé."
        imageUrl="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg"
      />
      
      <ActivityItem 
        title="VTT"
        description="Des itinéraires adaptés à toutes les pratiques : cross-country, enduro, descente. La station propose également un bike park avec plusieurs pistes de différents niveaux."
        imageUrl="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg"
      />
      
      <ActivityItem 
        title="Parapente"
        description="Survolez les montagnes et admirez les paysages alpins d'en haut. Plusieurs zones de décollage et d'atterrissage sont aménagées avec des moniteurs diplômés."
        imageUrl="https://images.pexels.com/photos/65795/paraglider-paragliding-fly-flying-65795.jpeg"
      />
      
      <ActivityItem 
        title="Baignade et Activités Aquatiques"
        description="Profitez du plan d'eau du Bouchet pour vous rafraîchir et vous détendre. Pédalos, stand-up paddle et autres activités nautiques sont proposés."
        imageUrl="https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg"
      />
      
      <Text style={styles.closingText}>
        La région offre également de nombreuses autres activités comme l'escalade, la via ferrata, 
        le canyoning, la pêche, ainsi que des visites culturelles et des événements tout au long de la saison.
      </Text>
    </View>
  );
}

type ActivityItemProps = {
  title: string;
  description: string;
  imageUrl: string;
};

function ActivityItem({ title, description, imageUrl }: ActivityItemProps) {
  return (
    <View style={styles.activityItem}>
      <Text style={styles.activityTitle}>{title}</Text>
      <Image 
        source={{ uri: imageUrl }}
        style={styles.activityImage}
        resizeMode="cover"
      />
      <Text style={styles.activityDescription}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F5F0',
  },
  seasonToggle: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  seasonButton: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
  },
  seasonButtonActive: {
    borderBottomWidth: 3,
    borderBottomColor: '#8B5A2B',
  },
  seasonButtonText: {
    fontFamily: 'Lora-Regular',
    fontSize: 16,
    color: '#555555',
  },
  seasonButtonTextActive: {
    fontFamily: 'Lora-Bold',
    color: '#8B5A2B',
  },
  contentContainer: {
    padding: 20,
  },
  headerImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontFamily: 'Lora-Bold',
    fontSize: 24,
    color: '#5D4037',
    marginBottom: 12,
  },
  description: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 15,
    lineHeight: 24,
    color: '#333333',
    marginBottom: 24,
  },
  activityItem: {
    marginBottom: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  activityTitle: {
    fontFamily: 'Lora-Bold',
    fontSize: 18,
    color: '#8B5A2B',
    marginBottom: 12,
  },
  activityImage: {
    width: '100%',
    height: 160,
    borderRadius: 8,
    marginBottom: 12,
  },
  activityDescription: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    lineHeight: 22,
    color: '#555555',
  },
  closingText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 15,
    fontStyle: 'italic',
    lineHeight: 22,
    color: '#5D4037',
    marginBottom: 24,
    textAlign: 'center',
    padding: 16,
    backgroundColor: '#F0E5D8',
    borderRadius: 8,
  },
});