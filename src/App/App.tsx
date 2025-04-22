import React from 'react';
import { LanguageProvider } from '../i18n/LanguageContext';

// Importe aqui os componentes da sua aplicação
// import { LargeDesktopScreen } from '../screens/LargeDesktop';

export const App: React.FC = () => {
  return (
    <LanguageProvider initialLanguage="EN">
      {/* Aqui você pode adicionar os componentes da sua aplicação */}
      {/* <LargeDesktopScreen /> */}
    </LanguageProvider>
  );
};