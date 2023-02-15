import React, {FC, Suspense} from 'react'
import {Counter} from "../Counter/Counter";
import '../../../index.scss'
import {Link, Route, Routes} from 'react-router-dom';
import {AboutPageLazy} from "../../pages/AboutPage/AboutPageLazy";
import {MainPageLazy} from "../../pages/MainPage/MainPageLazy";

export interface IApp {
}

export const App: FC<IApp> = (props: IApp) => {
    return (
        <div>
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