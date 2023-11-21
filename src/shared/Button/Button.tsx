import { classNames } from 'shared/lib/classNames'
import { type ButtonHTMLAttributes, FC } from 'react'
import cls from './Button.modules.scss'

export enum ButtonThemes {
	Clear = 'clear',
	Primary = 'primary',
}

export type ButtonProps = {
	className?: string
	theme?: ButtonThemes
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
	const {
		className, children, theme = ButtonThemes.Primary, ...otherProps
	} = props
	return (
		<button className={classNames(cls.Button, {}, [props.className, cls[theme]])} type="button" {...otherProps}>
			{children}
		</button>
	)
}
