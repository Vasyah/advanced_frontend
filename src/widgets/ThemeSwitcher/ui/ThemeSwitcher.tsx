import {FC} from "react";
import {useTheme} from "app/providers/ThemeProvider";
import {Theme} from "app/providers/ThemeProvider/lib/ThemeContext";
import ThemeDark from 'shared/assets/icons/theme-dark.svg'
import ThemeLight from 'shared/assets/icons/theme-light.svg'
import {Button} from "shared/Button/Button";

export interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme()

    return (
        <Button onClick={toggleTheme}>{theme === Theme.LIGHT ? <ThemeLight/> : <ThemeDark/>}</Button>
    );
};