import type { Preview } from '@storybook/react';
import React from 'react';
import { StyledDecorator } from './StyleDecorator/StyledDecorator';
import { ThemeDecorator } from './ThemeDecorator/ThemeDecorator';
// import { classNames } from '../../src/shared/lib/classNames';
import { Theme } from '../../src/app/providers/ThemeProvider/lib/ThemeContext';

const preview: Preview = {
	decorators: [
		StyledDecorator, ThemeDecorator(Theme.LIGHT),
	],
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
