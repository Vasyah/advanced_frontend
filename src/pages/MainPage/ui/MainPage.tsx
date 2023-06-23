import React, { FC } from 'react'

export type IMainPage = Record<string, unknown>

export const MainPage: FC<IMainPage> = (props: IMainPage) => (
	<>
		<button type="button">EN/RU</button>
		<div>
			MainPage
		</div>
	</>
)
