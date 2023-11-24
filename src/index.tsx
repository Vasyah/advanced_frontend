import React, { render } from 'react-dom'
import { App } from 'app/App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider/ui/ThemeProvider'
// Import i18n (needs to be bundled ;))
import './shared/config/i18n/i18n'
import ErrorBoundary from 'app/providers/ErrorBoundary/ui/ErrorBoundary';

render(
	<BrowserRouter>
		<ErrorBoundary>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</ErrorBoundary>
	</BrowserRouter>,
	document.getElementById('root'),
)
