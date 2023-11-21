import React, { PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/Button/Button';
import cls from './PageError.modules.scss';

interface PageErrorProps {
	className?: string;
}

export const PageError: React.FC<PropsWithChildren<PageErrorProps>> = ({ className }: PropsWithChildren<PageErrorProps>) => {
	const onThrow = () => {
		// eslint-disable-next-line no-restricted-globals
		location.reload();
	}

	return (
		<div className={classNames('app', {}, ['dark'])}>
			<div className={classNames(cls.PageError, {}, [className])}>
				<h3>Ууупс, произошла непредвиденная ошибка!</h3>
				<Button onClick={onThrow}>Перезагрузить страницу</Button>
			</div>
		</div>
	)
};
