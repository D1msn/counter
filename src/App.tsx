import React, {useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";

function App() {
    const [minCount, setMinCount] = useState<number>(0)
    const [maxCount, setMaxCount] = useState<number>(5)
    const [increment, setIncrement] = useState<number>(1)

  return (
    <div className="App">
      <Counter minCount={0} maxCount={5} incrementCount={1} />
        <div className="counter-setter">
            <input value={minCount} onChange={(e) => setMinCount(+e.currentTarget.value)} type="number"/>
            <input value={maxCount} onChange={(e) => setMaxCount(+e.currentTarget.value)} type="number"/>
            <input value={increment} onChange={(e) => setIncrement(+e.currentTarget.value)} type="number"/>
        </div>
    </div>
  );
}

export default App;
