import React, { createContext, useState, useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

// Define content sections
const ContentSection = 'home' | 'gite' | 'activities' | 'gallery' | 'infos'

const ContentContext = createContext()

export const useContentContext = () => useContext(ContentContext)

export const ContentProvider = ({
  children,
}) => {
  // Helper to generate AsyncStorage key for a section
  const getSectionKey = (section) => `content_${section}`

  const getContent = async (section) => {
    try {
      const storedContent = await AsyncStorage.getItem(getSectionKey(section))
      return storedContent ? JSON.parse(storedContent) : null
    } catch (error) {
      console.error(`Error retrieving ${section} content:`, error)
      return null
    }
  }

  const updateContent = async (section, data) => {
    try {
      await AsyncStorage.setItem(getSectionKey(section), JSON.stringify(data))
    } catch (error) {
      console.error(`Error updating ${section} content:`, error)
      throw error
    }
  }

  return (
    <ContentContext.Provider value={{ getContent, updateContent }}>
      {children}
    </ContentContext.Provider>
  )
}
