import React, { FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

export type IAppRouter = Record<string, unknown>

export const AppRouter: FC<IAppRouter> = (props: IAppRouter) => (
	<Suspense fallback={<div className="page-layout">Loading...</div>}>
		<Routes>
			{Object.values(routeConfig)
				.map(({
					path,
					element,
				}) => (
					<Route
						key={path}
						path={path}
						element={(
							<div
								className="page-layout"
							>
								{element}
							</div>
						)}
					/>
				))}
		</Routes>
	</Suspense>
)
