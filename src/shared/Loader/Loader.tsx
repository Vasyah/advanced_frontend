import { classNames } from 'shared/lib/classNames';
import { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import cx from './Loader.module.scss';

export interface LoaderProps {
	className?: string;
}

export const Loader: React.FC<PropsWithChildren<LoaderProps>> = (props: PropsWithChildren<LoaderProps>) => {
	const { t } = useTranslation();

	return (
		<div>
			<div className={classNames(cx['loadingio-spinner-eclipse-sdyh6e5f9oe'])}>
				<div className={classNames(cx['ldio-3bnhxrzorho'])}>
					<div />
				</div>
			</div>
		</div>
	)
};
