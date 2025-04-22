import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import { LanguageCode } from './translations';

interface LanguageSelectorProps {
  className?: string;
}

/**
 * Componente para seleu00e7u00e3o de idioma
 */
export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ className = '' }) => {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as LanguageCode);
  };

  return (
    <select 
      value={language} 
      onChange={handleLanguageChange}
      className={className}
      aria-label="Select language"
    >
      <option value="PT">Portuguueas</option>
      <option value="EN">English</option>
      <option value="ES">Espau00f1ol</option>
    </select>
  );
};