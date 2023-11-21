import React, { FC } from 'react'
import { useTranslation } from 'react-i18next';

export type IAboutPage = Record<string, unknown>

export const AboutPage: FC<IAboutPage> = (props: IAboutPage) => {
	const { t } = useTranslation();
	return (
		<div>
			{t('AboutPage')}
		</div>
	)
}
