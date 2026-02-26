import React, { useState, useTransition } from 'react';

const TransitionDemo = () => {
    const [isPending, startTransition] = useTransition();
    const [filter, setFilter] = useState("");
    const [list, setList] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;
        setFilter(value); // Urgent update

        startTransition(() => {
            // Non-urgent update: Generating a huge list
            const items = [];
            for (let i = 0; i < 20000; i++) {
                if (i.toString().includes(value)) {
                    items.push(`Item ${i}`);
                }
            }
            setList(items);
        });
    };

    return (
        <div className="demo-container">
            <h2>useTransition Demo</h2>
            <div className="card">
                <input
                    type="text"
                    value={filter}
                    onChange={handleChange}
                    placeholder="Filter 20,000 items..."
                />

                <div style={{ marginTop: '20px' }}>
                    {isPending ? (
                        <p style={{ color: 'var(--primary)', fontWeight: '500' }}>Rendering list in background...</p>
                    ) : (
                        <div style={{
                            maxHeight: '300px',
                            overflowY: 'auto',
                            background: 'rgba(0,0,0,0.2)',
                            borderRadius: '8px',
                            padding: '10px'
                        }}>
                            {list.map((item, index) => (
                                <div key={index} style={{ padding: '6px 10px', fontSize: '0.9rem', borderBottom: '1px solid var(--border)' }}>{item}</div>
                            ))}
                            {list.length === 0 && <p style={{ color: 'var(--text-muted)' }}>No items found or start typing...</p>}
                        </div>
                    )}
                </div>
                <p style={{ marginTop: '16px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                    (The input field remains responsive while the heavy list updates are batched as low priority)
                </p>
            </div>
        </div>
    );
};

export default TransitionDemo;
