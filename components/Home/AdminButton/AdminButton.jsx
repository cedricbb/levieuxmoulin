import { TouchableOpacity } from 'react-native'
import React from 'react'
import { Cog } from 'lucide-react-native'
import { useAuthContext } from '@/contexts/AuthContext'
import { router } from 'expo-router'
import styles from './AdminButton.style'
import { COLORS } from '@/constants/theme'

export default function AdminButton() {
  const { isAuthenticated } = useAuthContext()

  const handleAdminPress = () => {
    if (isAuthenticated) {
      router.push('/(admin)')
    } else {
      router.push('/login')
    }
  }

  return (
    <>
      <TouchableOpacity
        style={[
          styles.adminButton,
          isAuthenticated ? styles.adminButtonActive : {},
        ]}
        onPress={handleAdminPress}
      >
        <Cog
          size={24}
          color={isAuthenticated ? COLORS.primary : COLORS.white}
        />
      </TouchableOpacity>
    </>
  )
}
