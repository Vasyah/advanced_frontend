import React, { FC, useState } from 'react'
import cx from './styles.module.scss'

export type ICounter = Record<string, unknown>

export const Counter: FC<ICounter> = (props: ICounter) => {
	const [value, setValue] = useState(0)

	const incrementValue = () => {
		setValue(prev => prev + 1)
	}

	return (
		<div>
			<h1>{value}</h1>
			<div>
				<button type="button" onClick={incrementValue} className={cx.green}>incement value</button>
			</div>
		</div>
	)
}
