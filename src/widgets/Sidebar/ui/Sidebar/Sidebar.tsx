import cls from './Sidebar.modules.scss';
import {classNames} from 'shared/lib/classNames';
import React, {FC, useState} from "react";
import {Button, ButtonThemes} from "shared/Button/Button";
import {ThemeSwitcher} from "widgets/ThemeSwitcher/ui/ThemeSwitcher";

export interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = (props: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [props.className])}>
            <Button theme={ButtonThemes.Primary} onClick={onToggle} className={cls.sidebarButton}> v </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
            </div>
        </div>
    );
};