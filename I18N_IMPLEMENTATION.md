# Internationalization (i18n) Implementation

## Overview
This project now supports three languages:
- **English (en)** - Default language
- **German (de)** - Deutsch
- **Turkish (tr)** - Türkçe

## Language Switcher
A language switcher has been added to the top right corner of the header. It features:
- Globe icon button
- Dropdown menu with language options (flag icons)
- Smooth animations using Framer Motion
- Language preference saved to localStorage

## Implementation Details

### Libraries Used
- **i18next**: Core internationalization framework
- **react-i18next**: React bindings for i18next

### File Structure
```
src/
├── i18n/
│   ├── config.ts           # i18n configuration
│   └── locales/
│       ├── en.json         # English translations
│       ├── de.json         # German translations
│       └── tr.json         # Turkish translations
└── components/
    └── LanguageSwitcher.tsx # Language switcher component
```

### Translation Files
All translations are organized in JSON format under `src/i18n/locales/`:
- Navigation items
- Hero section content
- About section paragraphs
- Timeline events
- Skills descriptions
- Projects information
- Contact form labels and validation messages
- Footer content
- Meta tags for SEO

### How to Use

#### Changing Language
Users can change the language by:
1. Clicking the globe icon in the top right corner of the header
2. Selecting their preferred language from the dropdown
3. The language preference is automatically saved to localStorage

#### Adding New Translations
To add translations for a new section:

1. Add the translation keys to all language files:
```json
{
  "newSection": {
    "title": "Section Title",
    "description": "Section description"
  }
}
```

2. Use the translations in your component:
```tsx
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('newSection.title')}</h1>
      <p>{t('newSection.description')}</p>
    </div>
  );
};
```

#### Adding a New Language
To add support for a new language:

1. Create a new translation file: `src/i18n/locales/[language-code].json`
2. Add all required translation keys
3. Update `src/i18n/config.ts`:
```typescript
import newLang from './locales/[language-code].json';

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: en },
        de: { translation: de },
        tr: { translation: tr },
        [languageCode]: { translation: newLang }, // Add this
    },
    // ...
});
```
4. Update `src/components/LanguageSwitcher.tsx` to include the new language option

### Dynamic Content
For content that needs to change based on language:
- Project descriptions are loaded dynamically using `getProjects()` function
- Validation messages in forms are created using `useMemo` to update when language changes

## Deployment
The site is deployed to the `gh-pages` branch and served from the custom domain `halitbarut.me`. 
The deployment process:
```bash
npm run deploy
```

This command:
1. Builds the production bundle
2. Deploys to the gh-pages branch
3. Preserves all necessary files including dotfiles

## Notes
- Default language is English (can be changed in `src/i18n/config.ts`)
- Language preference persists across sessions via localStorage
- All translations maintain the same visual styling and animations
- The language switcher is responsive and works on all screen sizes
