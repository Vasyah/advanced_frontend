import React, {FC, Suspense} from 'react'
import '../../index.scss'
import {Link, Route, Routes} from 'react-router-dom';
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "helpers/classNames";
import {AboutPage} from "pages/AboutPage/ui/AboutPage";
import {MainPageLazy} from "pages/MainPage/ui/MainPageLazy";

export interface IApp {
}


export const App: FC<IApp> = (props: IApp) => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Link to={'/'}>Main page</Link>
            <hr/>
            <Link to={'/about'}>About page</Link>
            <hr/>
            <br/>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'about'} element={<AboutPage/>}/>
                    <Route path={'/'} element={<MainPageLazy/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};