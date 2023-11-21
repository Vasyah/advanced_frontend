import React, { FC } from 'react'
import { Button } from 'shared/Button/Button'
import { useTranslation } from 'react-i18next';
import { AppLangs } from 'widgets/LangSwitcher/types';
import { classNames } from 'shared/lib/classNames';
import cx from './LangSwitcher.module.scss'

export interface ThemeSwitcherProps {
	className?: string
}

export const LangSwitcher: FC<ThemeSwitcherProps> = ({ className }: ThemeSwitcherProps) => {
	const { i18n } = useTranslation()

	const lang = i18n.language
	const changeLang = () => i18n.changeLanguage(lang === AppLangs.EN ? AppLangs.RU : AppLangs.EN)

	return (
		<Button className={classNames([className, cx.LangSwitcher].join(' '))} onClick={changeLang}>
			{lang.toUpperCase()}
		</Button>
	)
}
