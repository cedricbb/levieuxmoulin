import { View, Text, StyleSheet } from 'react-native';

export default function GiteItem({ description }: { description: string }) {
  const items = description
    .split('\n')
    .map(item => item.trim())
    .filter(item => item.length > 0);

  return (
    <View style={styles.giteItem}>
      {items.map((item, index) => (
        <View key={index} style={styles.bulletItem}>
          <Text style={styles.bulletPoint}>•</Text>
          <Text style={styles.bulletText}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
    giteItem: {
      marginBottom: 24,
      backgroundColor: '#FFFFFF',
      borderRadius: 8,
      padding: 12,
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Ignoré par React Native mais utile pour migration web
    },
    bulletItem: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginBottom: 4,
    },
    bulletPoint: {
      fontSize: 18,
      lineHeight: 22,
      color: '#8B5A2B',
      marginRight: 8,
      marginTop: 1,
    },
    bulletText: {
      flex: 1,
      fontFamily: 'OpenSans-Regular',
      fontSize: 14,
      lineHeight: 22,
      color: '#555555',
    },
  });