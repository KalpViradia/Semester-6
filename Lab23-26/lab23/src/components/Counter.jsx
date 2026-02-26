import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="demo-container">
      <h2>useState Demo</h2>
      <div className="card">
        <h3>Current Counter: <span style={{ color: 'var(--primary)' }}>{count}</span></h3>
        <button onClick={() => setCount(count + 1)}>
          Increment Count
        </button>
      </div>
    </div>
  );
}

export default Counter;