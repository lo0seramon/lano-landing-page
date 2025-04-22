import { useEffect, useState } from "react";

// Definição dos breakpoints
export const BREAKPOINTS = {
  MOBILE: 744,      // < 744px
  TABLET: 1728,     // >= 744px e < 1728px
  DESKTOP: 1728     // >= 1728px
};

export function useWindowWidth() {
  // Inicializa com 0 para evitar problemas de renderização no servidor
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }
    
    // Adiciona o event listener para resize
    window.addEventListener("resize", handleResize);
    
    // Chama handleResize imediatamente para definir o valor inicial
    handleResize();
    
    // Cleanup: remove o event listener quando o componente é desmontado
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenWidth;
}

// Hooks utilitários para verificar o tamanho da tela
export function useIsMobile() {
  const width = useWindowWidth();
  return width > 0 && width < BREAKPOINTS.MOBILE;
}

export function useIsTablet() {
  const width = useWindowWidth();
  return width >= BREAKPOINTS.MOBILE && width < BREAKPOINTS.TABLET;
}

export function useIsDesktop() {
  const width = useWindowWidth();
  return width >= BREAKPOINTS.DESKTOP;
}
