import { classNames } from 'shared/lib/classNames'
import React, { FC, useState } from 'react'
import { Button, ButtonThemes } from 'shared/Button/Button'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ui/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import cls from './Sidebar.modules.scss'

export interface SidebarProps {
	className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false)

	const onToggle = () => {
		setCollapsed(prev => !prev)
	}

	return (
		<div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])} data-testid="sidebar">
			<Button
				data-testid="sidebar-collapse-button"
				theme={ButtonThemes.Primary}
				onClick={onToggle}
				className={cls.sidebarButton}
			>
				v
			</Button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher />
			</div>
		</div>
	)
}
