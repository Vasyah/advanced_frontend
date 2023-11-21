import { PageError } from 'widgets/PageError/ui/PageError';
import React, { ErrorInfo, ReactNode, Suspense } from 'react'

export interface ErrorBoundaryProps {
	children: ReactNode;
}

export interface ErrorBoundaryState {
	hasError: false;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props:ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error:Error) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true }
	}

	componentDidCatch(error:Error, info:ErrorInfo) {
		// You can also log the error to an error reporting service
		console.log({ error, info });
	}

	render() {
		const { hasError } = this.state;
		const { children } = this.props;

		console.log(hasError)
		if (hasError) {
		// You can render any custom fallback UI
			return (
				<Suspense fallback="">
					<PageError />
				</Suspense>
			)
		}

		return children;
	}
}

export default ErrorBoundary;
