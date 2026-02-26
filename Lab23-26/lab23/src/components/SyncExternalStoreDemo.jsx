import React, { useSyncExternalStore } from 'react';

// External store subscription
function subscribe(callback) {
    window.addEventListener('online', callback);
    window.addEventListener('offline', callback);
    return () => {
        window.removeEventListener('online', callback);
        window.removeEventListener('offline', callback);
    };
}

// Snapshot of the external data
function getSnapshot() {
    return navigator.onLine;
}

const SyncExternalStoreDemo = () => {
    const isOnline = useSyncExternalStore(subscribe, getSnapshot);

    return (
        <div className="demo-container">
            <h2>useSyncExternalStore Demo</h2>
            <div className="card">
                <p style={{ fontSize: '1.1rem', marginBottom: '15px' }}>Current Network Status:</p>
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '12px 24px',
                    borderRadius: '10px',
                    background: isOnline ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                    color: isOnline ? '#4ade80' : '#f87171',
                    border: '1px solid currentColor',
                    fontWeight: '700'
                }}>
                    <div style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        background: 'currentColor',
                        boxShadow: '0 0 10px currentColor'
                    }}></div>
                    {isOnline ? 'STABLE ONLINE' : 'CONNECTION OFFLINE'}
                </div>
                <p style={{ marginTop: '20px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    (Try toggling your network connection or using devtools emulators)
                </p>
            </div>
        </div>
    );
};

export default SyncExternalStoreDemo;
