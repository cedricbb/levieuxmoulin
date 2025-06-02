import { Tabs } from 'expo-router'
import { useColorScheme } from 'react-native'
import {
  Home,
  Building2,
  Bike,
  Image as ImageIcon,
  Info,
  CalendarClock,
} from 'lucide-react-native'
import { BlurView } from 'expo-blur'
import { COLORS } from '@/constants/theme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ViewStyle } from 'react-native'

export default function TabLayout() {
  const colorScheme = useColorScheme()
  const isDark = colorScheme === 'dark'
  const insets = useSafeAreaInsets()
  const TabBarStyle: ViewStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 64 + insets.bottom,
    paddingBottom: insets.bottom,
    paddingTop: 12,
    backgroundColor: isDark ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)',
    borderTopWidth: 0,
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
            intensity={80}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
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
          fontSize: 12,
          marginTop: 4,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Accueil',
          tabBarIcon: ({ size, color }) => <Home size={size} color={color} />,
          headerTitle: 'Le Vieux Moulin',
        }}
      />
      <Tabs.Screen
        name="gite"
        options={{
          title: 'Le Gîte',
          tabBarIcon: ({ size, color }) => (
            <Building2 size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="activities"
        options={{
          title: 'Activités',
          tabBarIcon: ({ size, color }) => <Bike size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="gallery"
        options={{
          title: 'Galerie',
          tabBarIcon: ({ size, color }) => (
            <ImageIcon size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="infos"
        options={{
          title: 'Infos',
          tabBarIcon: ({ size, color }) => <Info size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="reservation"
        options={{
          title: 'Réserver',
          tabBarIcon: ({ size, color }) => (
            <CalendarClock size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
