import React, { useState, useMemo } from 'react';

const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const getPrimesSum = (n) => {
    console.log("Calculating primes...");
    const primes = [];
    let num = 2;
    while (primes.length < n) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }
    return primes.reduce((acc, curr) => acc + curr, 0);
};

const PrimeCalculator = () => {
    const [count, setCount] = useState(0);
    const [useMemoHook, setUseMemoHook] = useState(false);

    // Without useMemo, this runs on every render (even when 'count' changes)
    const sumWithoutMemo = useMemoHook ? null : getPrimesSum(5000);

    // With useMemo, this only runs once
    const sumWithMemo = useMemo(() => {
        if (useMemoHook) return getPrimesSum(5000);
        return null;
    }, [useMemoHook]);

    const finalSum = useMemoHook ? sumWithMemo : sumWithoutMemo;

    return (
        <div className="demo-container">
            <h2>useMemo Demo</h2>
            <div className="card">
                <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
                    Sum of first 5,000 primes: <strong style={{ color: 'var(--primary)' }}>{finalSum}</strong>
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div>
                        <p style={{ marginBottom: '8px' }}>Count: <strong>{count}</strong></p>
                        <button onClick={() => setCount(prev => prev + 1)}>
                            Trigger Re-render
                        </button>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <input
                            type="checkbox"
                            checked={useMemoHook}
                            onChange={() => setUseMemoHook(!useMemoHook)}
                            style={{ width: 'auto' }}
                            id="use-memo-check"
                        />
                        <label htmlFor="use-memo-check" style={{ cursor: 'pointer' }}>Use useMemo optimization</label>
                    </div>

                    <div style={{
                        padding: '12px',
                        borderRadius: '8px',
                        fontSize: '0.9rem',
                        background: useMemoHook ? 'rgba(34, 197, 94, 0.1)' : 'rgba(249, 115, 22, 0.1)',
                        color: useMemoHook ? '#4ade80' : '#fb923c',
                        border: '1px solid currentColor'
                    }}>
                        {useMemoHook
                            ? "Optimization ACTIVE: UI responds instantly while count changes."
                            : "Optimization DISABLED: Heavy calculation runs on every render causing lag."}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrimeCalculator;
