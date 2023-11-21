import React, { FC } from 'react'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { classNames } from 'shared/lib/classNames'
import { AppLink } from 'shared/AppLink/AppLink'
import { useTranslation } from 'react-i18next';
import cls from './Navbar.modules.scss'

export interface NavbarProps {
	className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }: NavbarProps) => {
	const { t } = useTranslation();
	return		(
		<div className={classNames(cls.Navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink to={RoutePath.main}>{t('MainPage')}</AppLink>
				<AppLink to={RoutePath.about}>{t('AboutPage')}</AppLink>
			</div>
		</div>
	)
}
