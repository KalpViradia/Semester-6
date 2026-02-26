import React, { useState, useDeferredValue, useMemo } from 'react';

const SlowList = ({ text }) => {
    // Artificial delay to simulate an expensive component
    const items = useMemo(() => {
        const list = [];
        for (let i = 0; i < 5000; i++) {
            list.push(<li key={i}>Item {i} for "{text}"</li>);
        }
        return list;
    }, [text]);

    return <ul>{items}</ul>;
};

const DeferredValueDemo = () => {
    const [query, setQuery] = useState("");
    const deferredQuery = useDeferredValue(query);

    const isStale = query !== deferredQuery;

    return (
        <div className="demo-container">
            <h2>useDeferredValue Demo</h2>
            <div className="card">
                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Search Query</label>
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Type quickly to test..."
                    />
                </div>

                <div style={{
                    opacity: isStale ? 0.4 : 1,
                    transition: 'opacity 0.2s ease',
                    background: 'rgba(0,0,0,0.1)',
                    borderRadius: '8px',
                    padding: '10px',
                    maxHeight: '300px',
                    overflowY: 'auto'
                }}>
                    <h4 style={{ margin: '0 0 10px 0', fontSize: '0.9rem' }}>
                        {isStale ? "Updating results..." : `Showing results for: ${deferredQuery || " (empty)"}`}
                    </h4>
                    <SlowList text={deferredQuery} />
                </div>
            </div>
        </div>
    );
};


export default DeferredValueDemo;
