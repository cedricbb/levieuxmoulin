import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Eye, EyeOff } from 'lucide-react-native'
import styles from './AdminForm.style'
import { COLORS } from '../../../../constants/theme'
import { Alert } from 'react-native'
import { useAuth } from '@/hooks/useAuth'
import { useState } from 'react'

export default function AdminForm() {
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

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
            <EyeOff size={20} color={COLORS.text} />
          ) : (
            <Eye size={20} color={COLORS.text} />
          )}
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.loginButton, isLoading && styles.loginButtonDisabled]}
        onPress={handleLogin}
        disabled={isLoading}
      >
        <Text style={styles.loginButtonText}>
          {isLoading ? 'Connexion...' : 'Se connecter'}
        </Text>
      </TouchableOpacity>
    </View>
  )
}
