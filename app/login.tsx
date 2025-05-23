import { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native'
import { useAuth } from '@/hooks/useAuth'
import { Eye, EyeOff } from 'lucide-react-native'

export default function LoginScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const { login } = useAuth()

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert(
        'Erreur',
        'Veuillez entrer votre email et votre mot de passe.',
      )
      return
    }

    setIsLoading(true)

    try {
      await login(email, password)
      // Navigation to admin is handled in the AuthContext
    } catch (error) {
      Alert.alert('Erreur de connexion', 'Email ou mot de passe incorrect')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/3288102/pexels-photo-3288102.png',
            }}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.title}>Le Vieux Moulin</Text>
          <Text style={styles.subtitle}>Administration</Text>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez votre email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Text style={styles.label}>Mot de passe</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Entrez votre mot de passe"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <TouchableOpacity
              style={styles.eyeButton}
              onPress={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff size={20} color="#777777" />
              ) : (
                <Eye size={20} color="#777777" />
              )}
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={[
              styles.loginButton,
              isLoading && styles.loginButtonDisabled,
            ]}
            onPress={handleLogin}
            disabled={isLoading}
          >
            <Text style={styles.loginButtonText}>
              {isLoading ? 'Connexion...' : 'Se connecter'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F5F0',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 24,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  title: {
    fontFamily: 'Lora-Bold',
    fontSize: 28,
    color: '#5D4037',
  },
  subtitle: {
    fontFamily: 'Lora-Regular',
    fontSize: 18,
    color: '#8B5A2B',
    marginTop: 4,
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
    color: '#555555',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
  },
  passwordContainer: {
    position: 'relative',
    marginBottom: 24,
  },
  passwordInput: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingRight: 48,
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
  },
  eyeButton: {
    position: 'absolute',
    right: 16,
    top: 14,
  },
  loginButton: {
    backgroundColor: '#8B5A2B',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  loginButtonDisabled: {
    backgroundColor: '#CCBBAA',
  },
  loginButtonText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16,
    color: '#FFFFFF',
  },
})
