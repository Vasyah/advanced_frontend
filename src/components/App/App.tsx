import React, {FC} from 'react'
import {Counter} from "../Counter/Counter";
import '../../../index.scss'

export interface IApp {
}

export const App: FC<IApp> = (props: IApp) => {
    return (
        <div>
            <Counter/>
        </div>
    );
};