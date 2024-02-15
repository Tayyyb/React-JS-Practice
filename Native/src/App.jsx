import Chai from "./test"

// function App() {

//   return (
// <Chai/>
//   )
// }

// export default App;

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    if (count < 20) {
      setCount(prevCount => prevCount + 1);
    }
  };

  const handleRemove = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleAdd} disabled={count >= 20}>Add</button>
      <button onClick={handleRemove} disabled={count <= 0}>Remove</button>
    </div>
  );
}

export default Counter;
