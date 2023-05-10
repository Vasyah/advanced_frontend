import cls from './Button.modules.scss';
import {classNames} from 'shared/lib/classNames';
import {ButtonHTMLAttributes, FC} from "react";

export enum ButtonThemes {
    Clear = 'clear',
    Primary = 'primary'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonThemes
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
    const {className, children, theme = ButtonThemes.Clear, ...otherProps} = props
    return (
        <button className={classNames(cls.Button, {}, [props.className, cls[theme]])} {...otherProps}>
            {children}
        </button>
    );
};