import React, { createContext, useContext } from 'react';

const DataContext = createContext();

const ComponentC = () => {
    const data = useContext(DataContext);
    return (
        <div className="card" style={{ borderStyle: 'dotted' }}>
            <h3>Component C</h3>
            <p>Data from A (Direct): <strong style={{ color: 'var(--primary)' }}>{data}</strong></p>
        </div>
    );
};

const ComponentB = () => {
    return (
        <div className="card">
            <h3>Component B</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>I don't even know what data A is sending!</p>
            <ComponentC />
        </div>
    );
};

const ComponentA = () => {
    const sharedData = "Hello from Component A";

    return (
        <DataContext.Provider value={sharedData}>
            <div className="demo-container">
                <h2>useContext Demo</h2>
                <div className="card">
                    <h3>Component A (Provider)</h3>
                    <p>Providing: <strong>"{sharedData}"</strong></p>
                    <ComponentB />
                </div>
            </div>
        </DataContext.Provider>
    );
};

export default ComponentA;
