# Sistema de Internacionalizau00e7u00e3o

Este sistema de internacionalizau00e7u00e3o permite que a aplicau00e7u00e3o suporte mu00faltiplos idiomas de forma global e consistente.

## Estrutura

- `translations.ts`: Contu00e9m todas as traduu00e7u00f5es para os diferentes idiomas
- `LanguageContext.tsx`: Implementa o contexto React para gerenciar o idioma atual
- `index.ts`: Exporta todas as funcionalidades do sistema de internacionalizau00e7u00e3o

## Como usar

### 1. Configurar o provedor de idioma

No componente raiz da aplicau00e7u00e3o (normalmente `App.tsx`), envolva sua aplicau00e7u00e3o com o `LanguageProvider`:

```tsx
import { LanguageProvider } from './i18n';

function App() {
  return (
    <LanguageProvider initialLanguage="EN">
      {/* Componentes da aplicau00e7u00e3o */}
    </LanguageProvider>
  );
}
```

### 2. Usar traduu00e7u00f5es em componentes

Em qualquer componente, use o hook `useLanguage` para acessar as traduu00e7u00f5es:

```tsx
import { useLanguage } from '../i18n';

function MeuComponente() {
  const { t } = useLanguage();
  
  return (
    <div>
      <h1>{t('mainHeading')}</h1>
      <p>{t('subHeading')}</p>
    </div>
  );
}
```

### 3. Mudar o idioma

Para mudar o idioma, use a funu00e7u00e3o `setLanguage` do hook `useLanguage`:

```tsx
import { useLanguage, LanguageCode } from '../i18n';

function SeletorDeIdioma() {
  const { currentLanguage, setLanguage } = useLanguage();
  
  return (
    <div>
      <button onClick={() => setLanguage('EN')}>English</button>
      <button onClick={() => setLanguage('ES')}>Espau00f1ol</button>
      <button onClick={() => setLanguage('PT')}>Portuguu00eas</button>
    </div>
  );
}
```

### 4. Adicionar novas traduu00e7u00f5es

Para adicionar novas chaves de traduu00e7u00e3o, atualize o arquivo `translations.ts`:

1. Adicione a nova chave ao tipo `TranslationKeys`
2. Adicione a traduu00e7u00e3o para cada idioma no objeto `translations`

```tsx
// Exemplo de adiu00e7u00e3o de uma nova chave
export type TranslationKeys = 'earlyAccess' | 'brandName' | ... | 'minhaNovaChave';

export const translations: TranslationsType = {
  EN: {
    // ...
    minhaNovaChave: "My new text in English",
  },
  ES: {
    // ...
    minhaNovaChave: "Mi nuevo texto en Espau00f1ol",
  },
  PT: {
    // ...
    minhaNovaChave: "Meu novo texto em Portuguu00eas",
  }
};
```

## Componente LanguageSwitcher

Para facilitar a troca de idiomas, use o componente `LanguageSwitcher`:

```tsx
import { LanguageSwitcher } from '../components/LanguageSwitcher';

function MeuComponente() {
  return (
    <div>
      <LanguageSwitcher />
      {/* Resto do componente */}
    </div>
  );
}
```