import React, { FC } from 'react'
import { useTranslation } from 'react-i18next';

export type IMainPage = Record<string, unknown>

export const MainPage: FC<IMainPage> = (props: IMainPage) => {
	const { t } = useTranslation();

	return (
		<div>
			{t('MainPage')}
		</div>
	)
}
