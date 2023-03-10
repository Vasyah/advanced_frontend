import React, {FC, Suspense} from 'react'
import '../../../index.scss'
import {Link, Route, Routes} from 'react-router-dom';
import {AboutPageLazy} from "../../pages/AboutPage/AboutPageLazy";
import {MainPageLazy} from "../../pages/MainPage/MainPageLazy";
import {useTheme} from "../../theme/useTheme";

export interface IApp {
}


export const App: FC<IApp> = (props: IApp) => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Link to={'/'}>Main page</Link>
            <hr/>
            <Link to={'/about'}>About page</Link>
            <hr/>
            <br/>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'about'} element={<AboutPageLazy/>}/>
                    <Route path={'/'} element={<MainPageLazy/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};