import React, {useState} from 'react';
import s from './Counter.module.css'
import CounterTable from "./CounterTable/CounterTable";
import MyButton from "../UI/MyButton/MyButton";

type CounterPropsType = {
	maxCount: number
	minCount: number
	incrementCount: number
}

const Counter: React.FC<CounterPropsType> = ({maxCount, incrementCount, minCount}) => {
	const [count, setCount] = useState<number>(minCount);

	const increment = (inc: number) => {
		if (count < maxCount) {
			setCount(count + inc)
			if (count + inc > maxCount) {
				setCount(maxCount)
			}
		}
	}
	const reset = () => {
		setCount(minCount)
	}

	return (
		<div className={s.wrapper}>
			<CounterTable maxCount={maxCount} count={count}/>
			<div className={s.buttons}>
				<MyButton disabled={count === minCount} onClickButton={reset}>Сбросить</MyButton>
				<MyButton disabled={count === maxCount} onClickButton={() => increment(incrementCount)}>+{incrementCount}</MyButton>
			</div>
		</div>
	);
}

export default Counter;
