import React, {FC} from 'react'
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import cls from './Navbar.modules.scss';
import {classNames} from "shared/lib/classNames";
import {AppLink} from "shared/AppLink/AppLink";


export interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = (props: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [props.className])}>
            <div className={cls.links}><AppLink to={RoutePath.main}>Main page</AppLink>
                <AppLink to={RoutePath.about}>About page</AppLink></div>
        </div>
    );
};
