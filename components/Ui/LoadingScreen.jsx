import { View, Text, ActivityIndicator } from 'react-native'
import { COLORS } from '@/constants/theme'

export default function LoadingScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-base-100">
      <ActivityIndicator size="large" color={COLORS.secondary} />
      <Text className="font-sans text-lg text-secondary mt-4">
        Chargement...
      </Text>
    </View>
  )
}
