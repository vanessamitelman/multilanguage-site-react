import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const i18n = i18next.createInstance();

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: {
        translation: {
          nav: {
            home: 'Home',
            blog: 'Blog'
          },
          footer:
            'Vanessa is a registered trademark of Vanessa Ltd. and its affiliates.',
          banner: 'A new website is coming...',
          back: 'back',
          missing_data: 'No information available right now',
          error_page1: 'error 404',
          error_page2: 'Oops, you have reached a page that does not exist',
          language_selector: 'Select language',
          readMore: 'Read More'
        }
      },
      he: {
        translation: {
          nav: {
            home: 'בית',
            blog: 'בלוג'
          },
          footer: 'Vanessa הוא סימן מסחרי רשום של Vanessa Ltd. ושל החברות שלה.',
          banner: 'אתר חדש מגיע',
          back: 'אחורה',
          missing_data: 'אין מידע להציג כרגע',
          error_page1: 'שגיאה 404',
          error_page2: 'אופס, טעות בדף',
          language_selector: 'בחר שפה',
          readMore: 'קרא עוד'
        }
      }
    }
  });

export default i18n;
