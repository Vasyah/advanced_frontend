import { render, screen } from '@testing-library/react';
import { Button, ButtonThemes } from 'shared/Button/Button';

describe('Button tests', () => {
	test('test', () => {
		render(<Button>TEST</Button>)
		expect(screen.getByText('TEST')).toBeInTheDocument()

		screen.debug()
	})

	test('test class', () => {
		render(<Button theme={ButtonThemes.Clear}>TEST</Button>)
		expect(screen.getByText('TEST')).toHaveClass('clear')

		screen.debug()
	})
});
