import React from 'react';
import { LanguageProvider } from '../i18n/LanguageContext';
import './responsive.css';

// Importe aqui os componentes da sua aplicação
import { LargeDesktop } from '../screens/LargeDesktop/LargeDesktop';

export const App: React.FC = () => {
  return (
    <LanguageProvider initialLanguage="EN">
      {/* Aqui você pode adicionar os componentes da sua aplicação */}
      <LargeDesktop />
    </LanguageProvider>
  );
};