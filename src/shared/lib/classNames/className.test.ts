import { classNames } from './classNames';

describe('classNames', () => {
	test('test', () => {
		const expected = 'button big xs-size'

		expect(classNames('button big xs-size')).toBe(expected)
	})

	test('with mods', () => {
		const expected = 'button hovered'

		expect(classNames('button', { hovered: true })).toBe(expected)
	})

	test('with mods and additionals', () => {
		const expected = 'button gray primary hovered'

		expect(classNames('button', { hovered: true }, ['gray', 'primary'])).toBe(expected)
	})

	test('with mods undefined and additionals', () => {
		const expected = 'button gray primary hovered'

		expect(classNames('button', { hovered: true, scrollable: undefined, big: false }, ['gray', 'primary'])).toBe(expected)
	})
});
