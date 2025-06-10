import { useState, useRef, useCallback } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native'
import { WebView } from 'react-native-webview'
import { WebViewNavigation } from 'react-native-webview'
import { ChevronLeft } from 'lucide-react-native'

// This is a mock Le Bon Coin URL - in a real implementation this would be the actual listing URL
const BOOKING_URL = 'https://www.leboncoin.fr'

export default function ReservationScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const webViewRef = useRef(null)
  const [canGoBack, setCanGoBack] = useState(false)

  const handleBackPress = () => {
    if (canGoBack && webViewRef.current) {
      webViewRef.current.goBack()
      return true
    }
    return false
  }

  const onNavigationStateChange = useCallback((navState) => {
    setCanGoBack(navState.canGoBack)
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {canGoBack && (
          <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <ChevronLeft size={24} color="#8B5A2B" />
          </TouchableOpacity>
        )}
        <Text style={styles.headerTitle}>Réservation</Text>
        <View style={styles.placeholder} />
      </View>

      {isLoading && (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>
            Chargement de la page de réservation...
          </Text>
        </View>
      )}

      <WebView
        ref={webViewRef}
        source={{ uri: BOOKING_URL }}
        style={styles.webView}
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => setIsLoading(false)}
        onNavigationStateChange={onNavigationStateChange}
        startInLoadingState={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Vous êtes redirigé vers le site Le Bon Coin pour effectuer votre
          réservation.
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F5F0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#F9F5F0',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontFamily: 'Lora-Bold',
    fontSize: 18,
    color: '#5D4037',
  },
  placeholder: {
    width: 40,
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(249, 245, 240, 0.8)',
    zIndex: 1,
  },
  loadingText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    color: '#5D4037',
  },
  webView: {
    flex: 1,
  },
  footer: {
    padding: 16,
    backgroundColor: '#F0E5D8',
  },
  footerText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    textAlign: 'center',
    color: '#5D4037',
  },
})
