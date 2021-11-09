import React, {ChangeEvent, useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";

function App() {
	const [minCount, setMinCount] = useState<number>(0)
	const [maxCount, setMaxCount] = useState<number>(5)
	const [increment, setIncrement] = useState<number>(1)

	const pushIncrement = (e: ChangeEvent<HTMLInputElement>) => {
		const value = +e.currentTarget.value
		if (value < 1) {
			setIncrement(1)
		} else {
			setIncrement(value)
		}
	}

	return (
		<div className="App">
			<Counter minCount={minCount} maxCount={maxCount} incrementCount={increment}/>
			<div className="counter-setter">
				<div className="counter-setter__min">
					<input value={minCount} onChange={(e) => setMinCount(+e.currentTarget.value)} type="number"/>
					<p>Минимальное значение</p>
				</div>
				<div className="counter-setter__max">
					<input value={maxCount} onChange={(e) => setMaxCount(+e.currentTarget.value)} type="number"/>
					<p>Максимальное значение</p>
				</div>
				<div className="counter-setter__increment">
					<input value={increment} onChange={pushIncrement} type="number"/>
					<p>Шаг</p>
				</div>
			</div>
		</div>
	);
}

export default App;
