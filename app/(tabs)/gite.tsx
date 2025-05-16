import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useContent } from '@/hooks/useContent';
import LoadingScreen from '@/components/ui/LoadingScreen';
import ErrorScreen from '@/components/ui/ErrorScreen';
import { useState } from 'react';

type GiteTab = 'description' | 'equipements';

export default function GiteScreen() {
  const [tab, setTab] = useState<GiteTab>('description');
  const { content, isLoading, error } = useContent('gite');
  
  if (isLoading) return <LoadingScreen />;
  if (error) return <ErrorScreen message={error} />;
  
  return (
    <View style={styles.container}>
          <View style={styles.giteToggle}>
            <TouchableOpacity
              style={[styles.giteButton, tab === 'description' && styles.giteButtonActive]}
              onPress={() => setTab('description')}
            >
              <Text style={[styles.giteButtonText, tab === 'description' && styles.giteButtonTextActive]}>
                Description
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.giteButton, tab === 'equipements' && styles.giteButtonActive]}
              onPress={() => setTab('equipements')}
            >
              <Text style={[styles.giteButtonText, tab === 'equipements' && styles.giteButtonTextActive]}>
                Équipements
              </Text>
            </TouchableOpacity>
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F5F0',
  },
  headerImage: {
    width: '100%',
    height: 250,
  },
  contentContainer: {
    padding: 24,
  },
  title: {
    fontFamily: 'Lora-Bold',
    fontSize: 28,
    color: '#5D4037',
    marginBottom: 16,
  },
  giteToggle: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  giteButton: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
  },
  giteButtonActive: {
    borderBottomWidth: 3,
    borderBottomColor: '#8B5A2B',
  },
  giteButtonText: {
    fontFamily: 'Lora-Regular',
    fontSize: 16,
    color: '#555555',
  },
  giteButtonTextActive: {
    fontFamily: 'Lora-Bold',
    color: '#8B5A2B',
  },
  description: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    lineHeight: 24,
    color: '#333333',
    marginBottom: 24,
  },
  subTitle: {
    fontFamily: 'Lora-Bold',
    fontSize: 20,
    color: '#8B5A2B',
    marginBottom: 16,
    marginTop: 8,
  },
  bodyText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 15,
    lineHeight: 24,
    color: '#555555',
    marginBottom: 24,
  },
  sectionImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 24,
  },
  equipmentsContainer: {
    marginBottom: 24,
  },
  equipmentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  equipmentText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 15,
    color: '#555555',
    marginLeft: 12,
  },
  closingText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16,
    fontStyle: 'italic',
    lineHeight: 24,
    color: '#5D4037',
    marginBottom: 24,
    textAlign: 'center',
  },
});