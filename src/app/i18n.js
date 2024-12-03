import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // Default language
    lng: Localization.locale.split('-')[0], // Detect device language
    debug: false, // Set to true for debugging
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    backend: {
      loadPath: './locales/{{lng}}/translation.json', // Path to translation files
    },
  });

export default i18n;
