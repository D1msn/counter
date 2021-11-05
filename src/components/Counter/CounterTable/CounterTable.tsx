import React from 'react';
import s from './CounterTable.module.css'

type CounterTablePropsType = {
	count: number
	maxCount: number
}


const CounterTable: React.FC<CounterTablePropsType> = ({count, maxCount}) => {

	const counterScoreClass = count	=== maxCount ? [s.counterScore, s._active] : [s.counterScore]

	return (
		<div className={s.wrapper}>
			<span className={counterScoreClass.join(' ')}>{count}</span>
		</div>
	);
}

export default CounterTable;
