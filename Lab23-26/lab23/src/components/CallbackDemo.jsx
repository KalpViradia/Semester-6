import React, { useState, useCallback } from "react";

function Child({ onClick }) {
  console.log("Child rendered");
  return <button onClick={onClick}>Click Me</button>;
}

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Child button clicked");
  }, []);

  return (
    <div className="demo-container">
      <h2>useCallback Demo</h2>
      <div className="card">
        <p style={{ marginBottom: '15px' }}>Count: <strong color="var(--primary)">{count}</strong></p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={() => setCount(count + 1)}>
            Increment Parent Count
          </button>
          <Child onClick={handleClick} />
        </div>
        <p style={{ marginTop: '15px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          (Open console to see that Child doesn't re-render when Parent count changes, because the onClick prop is memoized)
        </p>
      </div>
    </div>
  );
}

export default Parent;