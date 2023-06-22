import { lazy } from 'react'

export const AboutPageLazy = lazy(async () => import('./AboutPage').then(module => (
	{ default: module.AboutPage })))
