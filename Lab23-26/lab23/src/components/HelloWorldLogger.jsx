import React, { useEffect, useState, useRef } from "react";

function HelloWorldLogger() {
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        console.log("Hello World");
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  return (
    <div className="demo-container">
      <h2>useEffect Demo</h2>
      <div className="card">
        <p style={{ marginBottom: '20px' }}>Check the browser console for output.</p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={() => setIsRunning(true)}
            disabled={isRunning}
            style={{ flex: 1, backgroundColor: isRunning ? 'transparent' : 'var(--bg-main)' }}
          >
            Start Logging
          </button>
          <button
            onClick={() => setIsRunning(false)}
            disabled={!isRunning}
            style={{ flex: 1, backgroundColor: !isRunning ? 'transparent' : 'rgba(239, 68, 68, 0.1)', borderColor: isRunning ? '#ef4444' : 'var(--border)' }}
          >
            Stop Logging
          </button>
        </div>
        {isRunning && <p style={{ color: 'var(--primary)', marginTop: '15px', fontSize: '0.9rem' }}>• Logging active...</p>}
      </div>
    </div>
  );
}

export default HelloWorldLogger;