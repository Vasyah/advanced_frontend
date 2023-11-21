import React, { PropsWithChildren, useEffect, useState } from 'react';
import { Button } from 'shared/Button/Button';

interface BugButtonProps {
	className?: string;
}

export const BugButton: React.FC<PropsWithChildren<BugButtonProps>> = ({ className }: PropsWithChildren<BugButtonProps>) => {
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		if (isError) {
			throw new Error('');
		}
	}, [isError]);

	const onThrow = () => {
		setIsError(true)
	}

	return (
		<Button onClick={onThrow}>
			Пульнуть ошибку
		</Button>
	)
};
