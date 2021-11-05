import React from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <div className="App">
      <Counter minCount={0} maxCount={5} incrementCount={1} />
    </div>
  );
}

export default App;
