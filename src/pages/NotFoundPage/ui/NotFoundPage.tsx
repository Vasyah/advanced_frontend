import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import cx from './NotFoundPage.modules.scss'

export interface NotFoundPageProps {}
export const NotFoundPage: React.FC< NotFoundPageProps> = props => {
	const { t } = useTranslation()

	return <div className={classNames(cx.NotFound)}>{t('NotFoundPage.title')}</div>
};
