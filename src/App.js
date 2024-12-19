import './App.css';
import { useState } from 'react';

function App() {
  // useState is a hook that allows us to add state to our functional component
  // it returns an array with two elements: the current state value and a function that allows us to update the state
  const [count, setCount] = useState(0);
  // increment and decrement are functions that update the count state
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
