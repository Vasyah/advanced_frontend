import {classNames} from 'shared/lib/classNames';
import {FC} from "react";
import {Link, LinkProps} from "react-router-dom";
import cls from 'shared/AppLink/AppLink.modules.scss'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

export interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props: AppLinkProps) => {
    const {to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps} = props
    return (
        <Link to={to} className={classNames(cls.AppLink, {}, [props.className, cls[theme]])} {...otherProps}>
            {children}
        </Link>
    );
};