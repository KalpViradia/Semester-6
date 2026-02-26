import React, { useRef, useState, useEffect } from 'react';

const RefDemo = () => {
    const inputRef = useRef(null);
    const [renderCount, setRenderCount] = useState(0);
    const prevCountRef = useRef(0);

    useEffect(() => {
        prevCountRef.current = renderCount;
    }, [renderCount]);

    return (
        <div className="demo-container">
            <h2>useRef Demo</h2>
            <div className="card">
                <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
                    <input ref={inputRef} placeholder="Input to focus" />
                    <button onClick={() => inputRef.current.focus()}>Focus Input</button>
                </div>

                <div style={{ padding: '15px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid var(--border)' }}>
                    <p>Current Render: <strong style={{ color: 'var(--primary)' }}>{renderCount}</strong></p>
                    <p>Previous Render (stored in ref): <strong style={{ color: 'var(--text-muted)' }}>{prevCountRef.current}</strong></p>
                    <button onClick={() => setRenderCount(c => c + 1)} style={{ marginTop: '10px' }}>Force Re-render</button>
                </div>
                <p style={{ marginTop: '16px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    (Ref values persist without triggering re-renders themselves)
                </p>
            </div>
        </div>
    );
};

export default RefDemo;
