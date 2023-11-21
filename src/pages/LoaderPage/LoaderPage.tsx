import { classNames } from 'shared/lib/classNames';
import { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { Loader } from 'shared/Loader/Loader';
import cx from './LoaderPage.module.scss';

export interface LoaderPageProps {
	className?: string;
}

export const LoaderPage: React.FC<PropsWithChildren<LoaderPageProps>> = (props: PropsWithChildren<LoaderPageProps>) => {
	const { t } = useTranslation();

	return (
		<div className={classNames(`className ${cx.LoaderPage}`)}><Loader /></div>
	)
};
