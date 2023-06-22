import { lazy } from 'react'

export const MainPageLazy = lazy(async () => import('./MainPage').then(module => (
	{ default: module.MainPage })))
