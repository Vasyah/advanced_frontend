import React, {FC, Suspense} from 'react'
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

export interface IAppRouter {
}

export const AppRouter: FC<IAppRouter> = (props: IAppRouter) => {
    return (
        <Suspense fallback={<div className={'page-layout'}>Loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({path, element}) => <Route key={path} path={path}
                                                                            element={<div
                                                                                className={'page-layout'}>
                                                                                {element}
                                                                            </div>}/>)}
            </Routes>
        </Suspense>
    );
};