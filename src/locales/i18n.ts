import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './languages/en.json';
import uk from './languages/uk.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            uk: { translation: uk },
        },
        fallbackLng: 'en',
        interpolation: { escapeValue: false },

        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        },
    });

const setHtmlLang = (lng: string) => {
    document.documentElement.lang = lng;
};

setHtmlLang(i18n.language);

i18n.on('languageChanged', (lng) => {
    setHtmlLang(lng);
});

export default i18n;
