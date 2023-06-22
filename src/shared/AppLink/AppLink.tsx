import { classNames } from 'shared/lib/classNames'
import { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import cls from 'shared/AppLink/AppLink.modules.scss'

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

export type AppLinkProps = {
	className?: string
	theme?: AppLinkTheme
} & LinkProps

export const AppLink: FC<AppLinkProps> = ({
	children,
	className,
	theme = AppLinkTheme.PRIMARY,
	to,
	...otherProps
}: AppLinkProps) => (
	<Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...otherProps}>
		{children}
	</Link>
)
