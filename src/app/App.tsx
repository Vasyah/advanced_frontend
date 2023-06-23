import React, { FC, Suspense } from 'react'
import './styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/Router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar'
import { useTranslation } from 'react-i18next';

export type AppProps = Record<string, unknown>

const Language:FC = () => {
	const { t, i18n } = useTranslation()
	return <div>{t(['Welcome to React'])}</div>
}

export const App: FC<AppProps> = (props: AppProps) => {
	const { theme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback={<div>loading...</div>}>
				<Language />
				<Navbar />
				<div className="content">
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>

		</div>
	)
}
