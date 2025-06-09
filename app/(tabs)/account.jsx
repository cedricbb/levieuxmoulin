import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import { useAuthContext } from '@/contexts/AuthContext'
import AdminForm from '@/components/Admin/Login/AdminForm/AdminForm'
import { useState } from 'react'
import { useRouter } from 'expo-router'
import { COLORS } from '@/constants/theme'

export default function AccountScreen() {
  const { isAuthenticated, isAdmin, logout } = useAuthContext()
  const [loginType, setLoginType] = useState('user') // 'user' or 'admin'
  const router = useRouter()

  // If not authenticated, show login screen
  if (!isAuthenticated) {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.tabContainer}>
            <TouchableOpacity
              style={[
                styles.tabButton,
                loginType === 'user' && styles.activeTabButton,
              ]}
              onPress={() => setLoginType('user')}
            >
              <Text
                style={[
                  styles.tabButtonText,
                  loginType === 'user' && styles.activeTabButtonText,
                ]}
              >
                Utilisateur
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tabButton,
                loginType === 'admin' && styles.activeTabButton,
              ]}
              onPress={() => setLoginType('admin')}
            >
              <Text
                style={[
                  styles.tabButtonText,
                  loginType === 'admin' && styles.activeTabButtonText,
                ]}
              >
                Administrateur
              </Text>
            </TouchableOpacity>
          </View>

          {loginType === 'admin' ? (
            <>
              <Text style={styles.title}>Connexion Administrateur</Text>
              <AdminForm />
            </>
          ) : (
            <>
              <Text style={styles.title}>Connexion Utilisateur</Text>
              <AdminForm />
            </>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }

  // If authenticated, show account info
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>
          {isAdmin ? 'Compte Administrateur' : 'Compte Utilisateur'}
        </Text>

        {isAdmin && (
          <TouchableOpacity
            style={styles.adminButton}
            onPress={() => router.push('/(admin)')}
          >
            <Text style={styles.adminButtonText}>
              Accéder à l'administration
            </Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity style={styles.logoutButton} onPress={logout}>
          <Text style={styles.logoutButtonText}>Se déconnecter</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.seashell,
    marginHorizontal: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
  },
  activeTabButton: {
    backgroundColor: COLORS.primary,
  },
  tabButtonText: {
    color: COLORS.primary,
    fontWeight: '500',
  },
  activeTabButtonText: {
    color: COLORS.white,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: COLORS.primary,
    fontFamily: 'poppinsBold',
  },
  adminButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  adminButtonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: COLORS.red,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  logoutButtonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
})
