import { useState, useEffect } from 'react';
import { useContentContext } from '@/contexts/ContentContext';

// Define content sections
type ContentSection = 'home' | 'gite' | 'activities' | 'gallery' | 'infos';

export function useContent(section: ContentSection) {
  const { getContent, updateContent } = useContentContext();
  const [content, setContent] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const fetchContent = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const data = await getContent(section);
      setContent(data);
    } catch (err) {
      setError('Impossible de charger le contenu');
      console.error(`Error fetching ${section} content:`, err);
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    fetchContent();
  }, [section]);
  
  const updateSectionContent = async (data: any) => {
    try {
      await updateContent(section, data);
      setContent(data);
      return true;
    } catch (err) {
      console.error(`Error updating ${section} content:`, err);
      throw err;
    }
  };
  
  return {
    content,
    isLoading,
    error,
    refreshContent: fetchContent,
    updateContent: updateSectionContent,
  };
}