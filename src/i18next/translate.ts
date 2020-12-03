import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
         
        }
    },
    ru: {
        translation: {
            'min': 'Значение должно быть больше чем {{min}}',
        }
    }
};

export const getLang = () => {
    if (window.location.pathname.substr(0, 4) === '/ru/') {
        return 'ru';
    }
    return 'en';
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: getLang(),
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
