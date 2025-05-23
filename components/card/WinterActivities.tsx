import { View, Image, Text, StyleSheet } from 'react-native'
import ActivityItem from './ActivityItem'
import { images } from '@/assets/images/images'
import Spacer from '../ui/Spacer'

export default function WinterActivities() {
  return (
    <View>
      <Image
        source={images.autourDuChalet12}
        style={styles.headerImage}
        resizeMode="cover"
      />

      <Text style={styles.title}>Activités d'Hiver</Text>

      <Text style={styles.description}>
        Le Grand-Bornand est une destination idéale pour les amateurs de sports
        d'hiver. Avec ses nombreuses pistes adaptées à tous les niveaux et ses
        infrastructures modernes, la station vous propose une multitude
        d'activités pour profiter pleinement de votre séjour hivernal.
      </Text>

      <ActivityItem
        title="Ski Alpin"
        description="Profitez des 84 km de pistes répartis sur 43 pistes pour tous niveaux. Le domaine skiable s'étend de 1000m à 2100m d'altitude avec 31 remontées mécaniques."
        imageUrl="skiAlpin"
      />

      <ActivityItem
        title="Ski de Fond"
        description="60 km de pistes balisées dans un cadre féérique. Parcourez les plateaux nordiques de la vallée du Bouchet et découvrez des paysages à couper le souffle."
        imageUrl="skiDeFond"
      />

      <ActivityItem
        title="Raquettes"
        description="De nombreux sentiers balisés pour découvrir la montagne autrement. Plusieurs parcours thématiques permettent d'explorer la faune et la flore hivernales."
        imageUrl="raquettes"
      />

      <ActivityItem
        title="Luge et Activités Ludiques"
        description="Une piste de luge sécurisée pour le plaisir des petits et des grands. Profitez également d'un espace ludique avec des animations pour toute la famille."
        imageUrl="luge"
      />

      <ActivityItem
        title="Chiens de traîneaux"
        description="Profitez de la tranquillité de la montagne avec vos chiens. Plusieurs sentiers balisés permettent de découvrir la nature hivernale."
        imageUrl="chiensDeTraineaux"
      />

      <ActivityItem
        title="SnowPark"
        description="Un espace dédié aux amateurs de sensations fortes avec modules, rails et sauts adaptés à tous les niveaux. Venez perfectionner vos figures ou simplement vous initier au freestyle dans un cadre sécurisé et convivial."
        imageUrl="snowboard"
      />

      <ActivityItem
        title="Fat Bike"
        description="Découvrez la montagne autrement grâce au fat bike ! Parcourez les sentiers enneigés sur un vélo aux pneus surdimensionnés, accessible à tous les niveaux pour une expérience ludique et originale."
        imageUrl="fatbike"
      />

      <ActivityItem
        title="Patinage"
        description="Glissez sur la patinoire naturelle du Bouchet et profitez d’un cadre féérique en plein air. Activité accessible à tous, idéale pour partager un moment convivial en famille ou entre amis."
        imageUrl="patinage"
      />

      <ActivityItem
        title="Randonnée sur glacier"
        description="Partez à l’aventure sur les glaciers accompagnés de guides expérimentés. Découvrez des paysages spectaculaires et vivez une expérience inoubliable au cœur de la haute montagne."
        imageUrl="randonneeGlacier"
      />

      <Text style={styles.closingText}>
        Le Vieux Moulin est situé à seulement 300m des pistes, vous permettant
        d'accéder facilement au domaine skiable pour profiter pleinement de vos
        journées sur les pistes.
      </Text>
      <Spacer size={24} />
    </View>
  )
}

const styles = StyleSheet.create({
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
})
