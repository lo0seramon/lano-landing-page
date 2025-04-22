import React from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import { AboutUsSection } from './screens/LargeDesktop/sections/AboutUsSection/AboutUsSection';
import './App/responsive.css';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <AboutUsSection />
      </div>
    </LanguageProvider>
  );
}

export default App;