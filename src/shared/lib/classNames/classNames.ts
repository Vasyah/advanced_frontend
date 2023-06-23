type Mods = Record<string, boolean | string>

export function classNames(classes: string, mods: Mods = {}, additional: string[] = []): string {
	return [
		classes,
		// Фильтр по булеану добавлен для того, чтобы добавлять только не пустые значения
		...additional.filter(Boolean),
		...Object.entries(mods).filter(([_, value]) => Boolean(value)).map(([className]) => className),
	].join(' ')
}
