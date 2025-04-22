import React, { createContext, useContext } from 'react';
import { useIsMobile, useIsTablet, useIsDesktop, useWindowWidth } from './breakpoints';

// Cria o contexto
const ResponsiveContext = createContext({
  isMobile: false,
  isTablet: false,
  isDesktop: false,
  screenWidth: 0
});

// Provedor do contexto
export const ResponsiveProvider = ({ children }) => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isDesktop = useIsDesktop();
  const screenWidth = useWindowWidth();

  const value = {
    isMobile,
    isTablet,
    isDesktop,
    screenWidth
  };

  return (
    <ResponsiveContext.Provider value={value}>
      {children}
    </ResponsiveContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useResponsive = () => useContext(ResponsiveContext);