import React, { useState, useEffect, useDebugValue } from 'react';

function useOnlineStatus() {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    // useDebugValue is used to label custom hooks in React DevTools
    useDebugValue(isOnline ? "Online" : "Offline");

    return isOnline;
}

const DebugValueDemo = () => {
    const isOnline = useOnlineStatus();

    return (
        <div className="demo-container">
            <h2>useDebugValue Demo</h2>
            <div className="card">
                <p style={{ marginBottom: '15px' }}>Current Hook Status:</p>
                <div style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    background: isOnline ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                    color: isOnline ? '#4ade80' : '#f87171',
                    fontWeight: 'bold',
                    border: '1px solid currentColor'
                }}>
                    {isOnline ? 'ONLINE' : 'OFFLINE'}
                </div>
                <p style={{ marginTop: '20px', fontSize: '0.85rem', color: 'var(--text-muted)', borderLeft: '3px solid var(--primary)', paddingLeft: '12px' }}>
                    <strong>Note:</strong> Open React DevTools, select this component, and look at the "Hooks" section. You will see a custom label next to <code>OnlineStatus</code>.
                </p>
            </div>
        </div>
    );
};

export default DebugValueDemo;
