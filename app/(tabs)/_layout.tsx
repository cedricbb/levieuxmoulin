import { Tabs } from 'expo-router'
import { SafeAreaView, useColorScheme } from 'react-native'
import {
  House as Home,
  Building2,
  Bike,
  Image as ImageIcon,
  Info,
  CalendarClock,
} from 'lucide-react-native'

export default function TabLayout() {
  const colorScheme = useColorScheme()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#8B5A2B', // Warm brown color for active tab
          tabBarInactiveTintColor: '#777777',
          tabBarStyle: {
            backgroundColor: colorScheme === 'dark' ? '#1A1A1A' : '#FFFFFF',
            borderTopColor: colorScheme === 'dark' ? '#333333' : '#EEEEEE',
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '500',
          },
          headerStyle: {
            backgroundColor: colorScheme === 'dark' ? '#222222' : '#F9F5F0',
          },
          headerTintColor: colorScheme === 'dark' ? '#FFFFFF' : '#8B5A2B',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Accueil',
            tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
            headerTitle: 'Le Vieux Moulin',
          }}
        />
        <Tabs.Screen
          name="gite"
          options={{
            title: 'Le Gîte',
            tabBarIcon: ({ color, size }) => (
              <Building2 size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="activities"
          options={{
            title: 'Activités',
            tabBarIcon: ({ color, size }) => <Bike size={size} color={color} />,
          }}
        />
        <Tabs.Screen
          name="gallery"
          options={{
            title: 'Galerie',
            tabBarIcon: ({ color, size }) => (
              <ImageIcon size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="infos"
          options={{
            title: 'Infos',
            tabBarIcon: ({ color, size }) => <Info size={size} color={color} />,
          }}
        />
        <Tabs.Screen
          name="reservation"
          options={{
            title: 'Réserver',
            tabBarIcon: ({ color, size }) => (
              <CalendarClock size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  )
}
