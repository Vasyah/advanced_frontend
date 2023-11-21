import { lazy } from 'react'

export const MainPageLazyAsync = lazy(() => import('./MainPage').then(module => (
	{ default: module.MainPage })));
