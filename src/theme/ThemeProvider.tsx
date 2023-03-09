import React, {useMemo} from 'react'
import {ThemeContext} from "./ThemeContext";
import {useTheme} from "./useTheme";

export interface IThemeProvider {
    children: React.ReactNode
}


export const ThemeProvider: React.FC<IThemeProvider> = ({children}: IThemeProvider) => {
    const {toggleTheme, theme} = useTheme()

    const defaultProps = useMemo(() => ({theme: theme, setTheme: toggleTheme}), [theme])


    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};