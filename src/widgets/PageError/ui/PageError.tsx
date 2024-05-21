import React, { PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/Button/Button';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cls from './PageError.modules.scss';

interface PageErrorProps {
	className?: string;
}

export const PageError: React.FC<PropsWithChildren<PageErrorProps>> = ({
	className,
}: PropsWithChildren<PageErrorProps>) => {
	const { t } = useTranslation()

	const onThrow = () => {
		// eslint-disable-next-line no-restricted-globals
		location.reload();
	};

	const reloadText = ' Перезагрузить страницу'
	return (
		<div className={classNames('app', {}, ['dark'])}>
			<div className={classNames(cls.PageError, {}, [className])}>
				<h3>{t('UnexpectedError')}</h3>
				<Button onClick={onThrow}>{reloadText}</Button>
			</div>
		</div>
	);
};
