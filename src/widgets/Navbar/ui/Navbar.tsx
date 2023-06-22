import React, { FC } from 'react'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { classNames } from 'shared/lib/classNames'
import { AppLink } from 'shared/AppLink/AppLink'
import cls from './Navbar.modules.scss'

export interface NavbarProps {
	className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }: NavbarProps) => (
	<div className={classNames(cls.Navbar, {}, [className])}>
		<div className={cls.links}>
			<AppLink to={RoutePath.main}>Main page</AppLink>
			<AppLink to={RoutePath.about}>About page</AppLink>
		</div>
	</div>
)
