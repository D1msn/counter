import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <div className="App">
      <Counter  maxCount={5} incrementCount={1} />
    </div>
  );
}

export default App;
