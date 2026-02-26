import React from 'react';

const ComponentC = ({ data }) => {
  return (
    <div className="card" style={{ borderStyle: 'dashed' }}>
      <h3>Component C</h3>
      <p>Data from A: <strong style={{ color: 'var(--primary)' }}>{data}</strong></p>
    </div>
  );
};

const ComponentB = ({ data }) => {
  return (
    <div className="card">
      <h3>Component B (Middleman)</h3>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Just passing data through...</p>
      <ComponentC data={data} />
    </div>
  );
};

const ComponentA = () => {
  const sharedData = "Hello from Component A";

  return (
    <div className="demo-container">
      <h2>Prop Drilling Demo</h2>
      <div className="card">
        <h3>Component A (Source)</h3>
        <p>Sending data: <strong>"{sharedData}"</strong></p>
        <ComponentB data={sharedData} />
      </div>
    </div>
  );
};

export default ComponentA;
