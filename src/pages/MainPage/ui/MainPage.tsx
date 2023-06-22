import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

export type IMainPage = Record<string, unknown>

export const MainPage: FC<IMainPage> = (props: IMainPage) => {
	const { t, i18n } = useTranslation()

	const toggleLang = () => {
		i18n.changeLanguage(i18n.language === 'de' ? 'en' : 'de')
	}

	return (
		<>
			<button type="button" onClick={toggleLang}>EN/RU</button>
			<h1>{t('title')}</h1>
			<div>
				MainPage
			</div>
		</>
	)
}
