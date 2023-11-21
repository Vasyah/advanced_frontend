import { lazy } from 'react'

export const AboutPageLazyLazy = lazy(async () => import('./AboutPage').then(module => (
	{ default: module.AboutPage })))
