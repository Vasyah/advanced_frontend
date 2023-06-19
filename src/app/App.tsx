import React, { FC } from 'react'
import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/Router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar/ui/Sidebar/Sidebar";

export interface IApp {
}

export const App: FC<IApp> = (props: IApp) => {
    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <div className={'content'}>
                <Sidebar/>
                <AppRouter/>
            </div>

        </div>
    );
};