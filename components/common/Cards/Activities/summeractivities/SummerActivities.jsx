import { View, Image, Text } from 'react-native'
import ActivityItem from '../ActivityItem/ActivityItem'
import Spacer from '../../../../Ui/Spacer'
import styles from './SummerActivities.style'

export default function SummerActivities() {
  return (
    <View>
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/2577274/pexels-photo-2577274.jpeg',
        }}
        style={styles.headerImage}
        resizeMode="cover"
      />

      <Text style={styles.title}>Activités d'Été</Text>

      <Text style={styles.description}>
        En été, Le Grand-Bornand se transforme en un véritable paradis pour les
        amateurs d'activités de plein air. Les paysages verdoyants offrent un
        cadre exceptionnel pour de nombreuses activités sportives et de détente.
      </Text>

      <ActivityItem
        title="Randonnée Pédestre"
        description="Plus de 300 km de sentiers balisés pour tous niveaux. Découvrez les alpages, les sommets et les lacs de montagne dans un environnement préservé."
        imageUrl="randonnee"
      />

      <ActivityItem
        title="VTT"
        description="Des itinéraires adaptés à toutes les pratiques : cross-country, enduro, descente. La station propose également un bike park avec plusieurs pistes de différents niveaux."
        imageUrl="vtt"
      />

      <ActivityItem
        title="Parapente"
        description="Survolez les montagnes et admirez les paysages alpins d'en haut. Plusieurs zones de décollage et d'atterrissage sont aménagées avec des moniteurs diplômés."
        imageUrl="parapente"
      />

      <ActivityItem
        title="Equitation"
        description="Explorez la montagne à cheval sur des sentiers balisés. Une expérience unique pour petits et grands, au cœur de paysages préservés."
        imageUrl="equitation"
      />

      <ActivityItem
        title="Montgolfière"
        description="Prenez de la hauteur et admirez la vallée vue du ciel lors d’un vol en montgolfière. Une aventure inoubliable pour découvrir la montagne autrement."
        imageUrl="montgolfiere"
      />

      <ActivityItem
        title="Via Ferrata"
        description="Parcours d’escalade sécurisé sur parois rocheuses, accessible à tous. Sensations fortes et panoramas exceptionnels garantis !"
        imageUrl="viaFerrata"
      />

      <ActivityItem
        title="Voile"
        description="Profitez du plan d’eau pour vous initier à la voile ou perfectionner vos manœuvres, dans un cadre naturel et paisible."
        imageUrl="voile"
      />

      <ActivityItem
        title="Rafting"
        description="Descendez les rivières de montagne en rafting et faites le plein d’adrénaline. Activité encadrée par des professionnels, idéale pour partager des émotions fortes."
        imageUrl="rafting"
      />

      <ActivityItem
        title="Baignade et Activités Aquatiques"
        description="Profitez du plan d'eau du Bouchet pour vous rafraîchir et vous détendre. Pédalos, stand-up paddle et autres activités nautiques sont proposés."
        imageUrl="aquatique"
      />

      <Text style={styles.closingText}>
        La région offre également de nombreuses autres activités comme
        l'escalade, la via ferrata, le canyoning, la pêche, ainsi que des
        visites culturelles et des événements tout au long de la saison.
      </Text>
      <Spacer size={24} />
    </View>
  )
}
