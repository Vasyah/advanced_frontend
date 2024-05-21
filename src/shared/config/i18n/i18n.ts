import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
	.use(initReactI18next)
	.init({
		lng: 'ru',
		interpolation: { escapeValue: false },
		resources: {
			en: {
				translation: {
					MainPage: 'Main Page',
					AboutPage: 'About Page',
					NotFoundPage: { title: 'Page Not Found' },
					UnexpectedError: 'UnexpectedError',
				},
			},
			ru: {
				translation: {
					MainPage: 'Главная страница',
					AboutPage: 'Страница информации',
					NotFoundPage: { title: 'Страница не найдена' },
					UnexpectedError: 'Ууупс, произошла непредвиденная ошибка!',

				},
			},
		},
		fallbackLng: 'ru',
		debug: true,
	});

export default i18n;
