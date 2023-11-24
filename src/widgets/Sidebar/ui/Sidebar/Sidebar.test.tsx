import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('Sidebar', () => {
	test('test', () => {
		renderWithTranslation(<Sidebar />)

		expect(screen.getByTestId('sidebar')).toBeInTheDocument()
		screen.debug()
	})

	it('collapse sidebar ', () => {
		renderWithTranslation(<Sidebar />)

		fireEvent.click(screen.getByTestId('sidebar-collapse-button'))

		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
		screen.debug()
	});
});
