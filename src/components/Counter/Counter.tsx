import React, { useState } from 'react';
import s from './Counter.module.css'
import CounterTable from "./CounterTable/CounterTable";
import MyButton from "../UI/MyButton/MyButton";

type CounterPropsType = {
	maxCount: number
	incrementCount: number
}

const Counter: React.FC<CounterPropsType> = ({maxCount, incrementCount}) => {
	const [count, setCount] = useState<number>(0);

	const increment = (inc: number) => {
		if(count < maxCount){
			let result = count + inc
			setCount(result)
			if(count + inc > maxCount){
				setCount(maxCount)
			}
		}
	}
	const reset = () => {
		setCount(0)
	}

	return (
		<div className={s.wrapper}>
			<div className={s.body}>
				<CounterTable maxCount={maxCount} count={count}/>
				<div className={s.buttons}>
					<MyButton disabled={ count === 0 }  onClickButton={reset}>Сбросить</MyButton>
					<MyButton disabled={ count === maxCount } onClickButton={() => increment(incrementCount)}>+{incrementCount}</MyButton>
				</div>
			</div>
		</div>
	);
}

export default Counter;
