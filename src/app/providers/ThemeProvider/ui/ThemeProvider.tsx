import React, { useMemo, useState } from 'react'
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext'

export interface IThemeProvider {
	children: React.ReactNode
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme ?? Theme.LIGHT

export const ThemeProvider: React.FC<IThemeProvider> = ({ children }: IThemeProvider) => {
	const [theme, setTheme] = useState(defaultTheme)

	const defaultProps = useMemo(() => ({ theme, setTheme }), [theme])

	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	)
}
