import React, {FC} from 'react'
import {Counter} from "../Counter/Counter";
import '../../../index.scss'
import {Link, Route, Routes} from 'react-router-dom';
import {AboutPage} from "../../pages/AboutPage/AboutPage";
import {MainPage} from "../../pages/MainPage/AboutPage";

export interface IApp {
}

export const App: FC<IApp> = (props: IApp) => {
    return (
        <div>
            <Link to={'/about'}>About page</Link>
            <hr/>
            <Link to={'/main'}>Main page</Link>
            <Routes>
                <Route path={'about'} element={<AboutPage/>}/>
                <Route path={'main'} element={<MainPage/>}/>
            </Routes>
            <Counter/>
        </div>
    );
};