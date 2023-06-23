import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from 'locales/en.json'
import ru from 'locales/ru.json'

i18n
	.use(initReactI18next)
	.init({
		resources: {
			en: {
				translation: {
					'Welcome to React': 'Welcome to React and react-i18next',
				},
			},
			ru: {
				translation: {
					'Welcome to React': 'Welcomasdaeact and react-i18next',
				},
			},
		},
		fallbackLng: 'ru',
		debug: true,
	});

export default i18n;
