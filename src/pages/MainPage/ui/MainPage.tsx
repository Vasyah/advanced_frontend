import React, { FC } from 'react'
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton';

export type IMainPage = Record<string, unknown>

export const MainPage: FC<IMainPage> = (props: IMainPage) => {
	const { t } = useTranslation();

	return (
		<div>
			<BugButton />
			{t('MainPage')}
		</div>
	)
}
