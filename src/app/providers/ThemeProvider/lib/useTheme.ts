import {LOCAL_STORAGE_THEME_KEY, Theme} from "./ThemeContext";
import {useState} from "react";

export interface UseThemeResult {
    theme: Theme

    toggleTheme(): void
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme ?? Theme.LIGHT

export function useTheme() {
    const [theme, setTheme] = useState<Theme>(defaultTheme)

    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {theme, toggleTheme}
}