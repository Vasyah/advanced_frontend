// // Пакет нужен для асинхронной загрузки переводов чанками
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n// Load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
// learn more: https://github.com/i18next/i18next-http-backend
// want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
	.use(Backend)
// Detect user language
// learn more: https://github.com/i18next/i18next-browser-languageDetector
	.use(LanguageDetector)
// Pass the i18n instance to react-i18next.
	.use(initReactI18next) // Passes i18n down to react-i18next
	.init({
		backend: {
			loadPath: 'locales/{{lng}}/{{ns}}.json',
		},
		// Resources,
		lng: 'en', // Language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
		// you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
		// if you're using a language detector, do not define the lng option

		interpolation: {
			escapeValue: false, // React already safes from xss
		},
	})

export default i18n
