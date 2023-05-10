type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
    return [
        cls,
        // фильтр по булеану добавлен для того, чтобы добавлять только не пустые значения
        ...additional.filter(Boolean),
        ...Object.entries(mods).filter(([_, value]) => Boolean(value)).map(([className]) => className)
    ].join(' ')
}