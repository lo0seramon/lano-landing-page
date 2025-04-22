import React, { createContext, useState, ReactNode, useContext } from 'react';
import { LanguageCode, translations, TranslationKeys } from './translations';

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
  currentLanguage: LanguageCode; // Alias para language (compatibilidade)
}

// Valor padrão do contexto
export const LanguageContext = createContext<LanguageContextType>({
  language: 'PT', // Idioma padrão
  currentLanguage: 'PT', // Alias para language (compatibilidade)
  setLanguage: () => {}, // Função vazia como padrão
});

interface LanguageProviderProps {
  children: ReactNode;
  defaultLanguage?: LanguageCode;
}

/**
 * Provedor de contexto para gerenciar o idioma atual da aplicação
 */
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ 
  children, 
  defaultLanguage = 'PT' 
}) => {
  // Estado para armazenar o idioma atual
  const [language, setLanguage] = useState<LanguageCode>(defaultLanguage);

  return (
    <LanguageContext.Provider value={{ 
      language, 
      currentLanguage: language, // Alias para language (compatibilidade)
      setLanguage 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

/**
 * Hook para acessar o contexto de idioma e obter funções de tradução
 * @returns Objeto com o idioma atual, função para alterar o idioma e função de tradução
 */
export function useLanguage() {
  const context = useContext(LanguageContext);
  
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  
  /**
   * Função para traduzir uma chave para o texto no idioma atual
   * @param key A chave de tradução
   * @returns O texto traduzido
   */
  const t = (key: TranslationKeys): string => {
    return translations[context.language][key];
  };
  
  return {
    ...context,
    t
  };
}