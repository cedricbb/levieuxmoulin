import { View, Text, TouchableOpacity } from 'react-native'
import { CircleAlert as AlertCircle, RefreshCw } from 'lucide-react-native'

export default function ErrorScreen({ message, onRetry }) {
  return (
    <View className="flex-1 items-center justify-center bg-base-100 p-6">
      <AlertCircle size={48} className="text-error" />
      <Text className="font-serif-bold text-xl text-secondary mt-4 mb-2">
        Une erreur est survenue
      </Text>
      <Text className="font-sans text-base text-neutral text-center mb-6">
        {message}
      </Text>

      {onRetry && (
        <TouchableOpacity className="btn btn-primary gap-2" onPress={onRetry}>
          <RefreshCw size={18} className="text-white" />
          <Text className="text-white font-sans-semibold">Réessayer</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}
