import React, { FC } from 'react'
import './styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/Router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar'

export type AppProps = Record<string, unknown>

export const App: FC<AppProps> = (props: AppProps) => {
	const { theme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar />
			<div className="content">
				<Sidebar />
				<AppRouter />
			</div>

		</div>
	)
}
