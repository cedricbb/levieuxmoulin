import { Tabs } from 'expo-router'
import { useColorScheme, View } from 'react-native'
import {
  Home,
  Building2,
  Bike,
  Image as ImageIcon,
  Info,
  CalendarClock,
  User,
} from 'lucide-react-native'
import { BlurView } from 'expo-blur'
import { COLORS } from '@/constants/theme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ViewStyle } from 'react-native'

export default function TabLayout() {
  const colorScheme = useColorScheme()
  const isDark = colorScheme === 'dark'
  const insets = useSafeAreaInsets()
  
  const TabBarStyle = {
    position: 'absolute',
    bottom: 0,
    left: 20,
    right: 20,
    height: 80,
    paddingBottom: Math.max(insets.bottom - 10, 10),
    paddingTop: 0,
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 12,
  }

  // Custom tab bar icon with special styling for center tab
  const renderTabIcon = (routeName, focused, color, size) => {
    const isCenter = routeName === 'reservation' // Make activities the center prominent tab
    
    if (isCenter) {
      return (
        <View style={{
          width: 60,
          height: 60,
          borderRadius: 40,
          backgroundColor: COLORS.secondary,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: -50,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 8,
          elevation: 8,
        }}>
          <CalendarClock size={28} color="white" />
        </View>
      )
    }

    // Regular icons for other tabs
    const IconComponent = {
      index: Home,
      gite: Building2,
      gallery: ImageIcon,
      infos: Info,
      activities: Bike,
      reservation: CalendarClock,
      account: User,
    }[routeName]

    return IconComponent ? <IconComponent size={size} color={color} /> : null
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.secondary,
        tabBarInactiveTintColor: COLORS.davyGrey,
        tabBarStyle: TabBarStyle,
        tabBarBackground: () => (
          <BlurView
            tint={isDark ? 'dark' : 'light'}
            intensity={100}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: isDark ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.95)',
              borderRadius: 25,
              overflow: 'hidden',
            }}
          />
        ),
        headerStyle: {
          backgroundColor: isDark ? COLORS.black : COLORS.seashell,
        },
        headerTintColor: isDark ? COLORS.white : COLORS.primary,
        headerTitleStyle: {
          fontFamily: 'poppinsBold',
        },
        tabBarLabelStyle: {
          fontFamily: 'interMedium',
          fontSize: 11,
          marginTop: 2,
        },
        tabBarItemStyle: {
          paddingVertical: 8,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Accueil',
          tabBarIcon: ({ focused, color, size }) => renderTabIcon('index', focused, color, size),
          headerTitle: 'Le Vieux Moulin',
        }}
      />
      <Tabs.Screen
        name="gite"
        options={{
          title: 'Le Gîte',
          tabBarIcon: ({ focused, color, size }) => renderTabIcon('gite', focused, color, size),
        }}
      />
      <Tabs.Screen
        name="activities"
        options={{
          title: 'Activités',
          tabBarIcon: ({ focused, color, size }) => renderTabIcon('activities', focused, color, size),
        }}
      />
      <Tabs.Screen
        name="reservation"
        options={{
          title: 'Réserver',
          tabBarIcon: ({ focused, color, size }) => renderTabIcon('reservation', focused, color, size),
          tabBarLabel: '',
        }}
      />
      <Tabs.Screen
        name="gallery"
        options={{
          title: 'Galerie',
          tabBarIcon: ({ focused, color, size }) => renderTabIcon('gallery', focused, color, size),
        
        }}
      />
      <Tabs.Screen
        name="infos"
        options={{
          title: 'Infos',
          tabBarIcon: ({ focused, color, size }) => renderTabIcon('infos', focused, color, size),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Compte',
          tabBarIcon: ({ focused, color, size }) => renderTabIcon('account', focused, color, size),
        }}
      />
    </Tabs>
  )
}
