import React, { createContext, useState, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define content sections
type ContentSection = 'home' | 'gite' | 'activities' | 'gallery' | 'infos';

interface ContentContextType {
  getContent: (section: ContentSection) => Promise<any>;
  updateContent: (section: ContentSection, data: any) => Promise<void>;
}

const ContentContext = createContext<ContentContextType>({
  getContent: async () => ({}),
  updateContent: async () => {},
});

export const useContentContext = () => useContext(ContentContext);

export const ContentProvider = ({ children }: { children: React.ReactNode }) => {
  // Helper to generate AsyncStorage key for a section
  const getSectionKey = (section: ContentSection) => `content_${section}`;
  
  const getContent = async (section: ContentSection) => {
    try {
      const storedContent = await AsyncStorage.getItem(getSectionKey(section));
      return storedContent ? JSON.parse(storedContent) : null;
    } catch (error) {
      console.error(`Error retrieving ${section} content:`, error);
      return null;
    }
  };
  
  const updateContent = async (section: ContentSection, data: any) => {
    try {
      await AsyncStorage.setItem(getSectionKey(section), JSON.stringify(data));
    } catch (error) {
      console.error(`Error updating ${section} content:`, error);
      throw error;
    }
  };
  
  return (
    <ContentContext.Provider value={{ getContent, updateContent }}>
      {children}
    </ContentContext.Provider>
  );
};