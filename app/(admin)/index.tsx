import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '@/hooks/useAuth';
import { Chrome as Home, Building2, Bike, Image as ImageIcon, Info, LogOut, CreditCard as Edit3 } from 'lucide-react-native';

export default function AdminDashboard() {
  const router = useRouter();
  const { logout } = useAuth();
  
  const handleLogout = async () => {
    await logout();
    router.replace('/login');
  };
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Administration</Text>
        <Text style={styles.subtitle}>Le Vieux Moulin Chinaillon</Text>
      </View>
      
      <Text style={styles.sectionTitle}>Gestion du contenu</Text>
      
      <View style={styles.menuContainer}>
        <TouchableOpacity 
          style={styles.menuItem}
          onPress={() => router.push('/edit-home')}
        >
          <View style={styles.menuItemIcon}>
            <Home size={24} color="#FFFFFF" />
          </View>
          <View style={styles.menuItemContent}>
            <Text style={styles.menuItemTitle}>Page d'accueil</Text>
            <Text style={styles.menuItemDescription}>Modifier le texte et les images de la page d'accueil</Text>
          </View>
          <Edit3 size={20} color="#8B5A2B" />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.menuItem}
          onPress={() => router.push('/edit-gite')}
        >
          <View style={[styles.menuItemIcon, { backgroundColor: '#5D4037' }]}>
            <Building2 size={24} color="#FFFFFF" />
          </View>
          <View style={styles.menuItemContent}>
            <Text style={styles.menuItemTitle}>Le Gîte</Text>
            <Text style={styles.menuItemDescription}>Modifier la description et les équipements</Text>
          </View>
          <Edit3 size={20} color="#8B5A2B" />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.menuItem}
          onPress={() => router.push('/edit-activities')}
        >
          <View style={[styles.menuItemIcon, { backgroundColor: '#2E7D32' }]}>
            <Bike size={24} color="#FFFFFF" />
          </View>
          <View style={styles.menuItemContent}>
            <Text style={styles.menuItemTitle}>Activités</Text>
            <Text style={styles.menuItemDescription}>Modifier les activités été et hiver</Text>
          </View>
          <Edit3 size={20} color="#8B5A2B" />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.menuItem}
          onPress={() => router.push('/edit-gallery')}
        >
          <View style={[styles.menuItemIcon, { backgroundColor: '#1565C0' }]}>
            <ImageIcon size={24} color="#FFFFFF" />
          </View>
          <View style={styles.menuItemContent}>
            <Text style={styles.menuItemTitle}>Galerie Photos</Text>
            <Text style={styles.menuItemDescription}>Gérer les photos du gîte et des environs</Text>
          </View>
          <Edit3 size={20} color="#8B5A2B" />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.menuItem}
          onPress={() => router.push('/edit-infos')}
        >
          <View style={[styles.menuItemIcon, { backgroundColor: '#E65100' }]}>
            <Info size={24} color="#FFFFFF" />
          </View>
          <View style={styles.menuItemContent}>
            <Text style={styles.menuItemTitle}>Informations Pratiques</Text>
            <Text style={styles.menuItemDescription}>Modifier les coordonnées et informations utiles</Text>
          </View>
          <Edit3 size={20} color="#8B5A2B" />
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <LogOut size={20} color="#FFFFFF" />
        <Text style={styles.logoutButtonText}>Déconnexion</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F5F0',
  },
  header: {
    padding: 24,
    backgroundColor: '#8B5A2B',
  },
  title: {
    fontFamily: 'Lora-Bold',
    fontSize: 24,
    color: '#FFFFFF',
  },
  subtitle: {
    fontFamily: 'Lora-Regular',
    fontSize: 16,
    color: '#F0E5D8',
    marginTop: 4,
  },
  sectionTitle: {
    fontFamily: 'Lora-Bold',
    fontSize: 18,
    color: '#5D4037',
    margin: 24,
    marginBottom: 16,
  },
  menuContainer: {
    paddingHorizontal: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  menuItemIcon: {
    backgroundColor: '#8B5A2B',
    borderRadius: 8,
    padding: 12,
    marginRight: 16,
  },
  menuItemContent: {
    flex: 1,
  },
  menuItemTitle: {
    fontFamily: 'Lora-Bold',
    fontSize: 16,
    color: '#5D4037',
    marginBottom: 4,
  },
  menuItemDescription: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    color: '#777777',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C62828',
    borderRadius: 8,
    padding: 14,
    margin: 24,
  },
  logoutButtonText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16,
    color: '#FFFFFF',
    marginLeft: 8,
  },
});