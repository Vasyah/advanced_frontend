import React, {FC} from 'react'
import {useTranslation} from "react-i18next";

export interface IMainPage {
}

export const MainPage: FC<IMainPage> = (props: IMainPage) => {
    const {t, i18n} = useTranslation();

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language == 'de' ? 'en' : 'de')
    }
    return (
        <>
            <button onClick={toggleLang}>EN/RU</button>
            <h1>{t('title')}</h1>
            <div>
                MainPage
            </div>
        </>
    );
};