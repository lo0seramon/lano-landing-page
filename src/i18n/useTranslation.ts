import { useLanguage } from './LanguageContext';
import { TranslationKeys } from './translations';

/**
 * Hook para obter a função de tradução baseada no idioma atual
 * @returns Uma função que traduz uma chave para o texto no idioma atual
 * @deprecated Use useLanguage instead
 */
export function useTranslation() {
  return useLanguage();
}