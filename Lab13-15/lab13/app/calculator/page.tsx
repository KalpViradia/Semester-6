'use client';

import { useState } from 'react';

export default function CalculatorPage() {
    const [display, setDisplay] = useState('');

    const handleClick = (value: string) => {
        setDisplay((prev) => prev + value);
    };

    const calculateResult = () => {
        try {
            // const result = eval(display);  // eval depricated error (Compilation Skipped: The 'eval' function is not supported)
            const result = safeEvaluate(display);
            setDisplay(result.toString());
        } catch {
            setDisplay('Error');
        }
    };

    const clearDisplay = () => {
        setDisplay('');
    };

    function safeEvaluate(expression: string): number {
        // Remove invalid characters
        const sanitized = expression.replace(/[^0-9+\-*/.]/g, '');

        // Split numbers and operators
        const numbers = sanitized.split(/[\+\-\*\/]/).map(Number);
        const operators = sanitized.replace(/[0-9.]/g, '').split('');

        let result = numbers[0];

        for (let i = 0; i < operators.length; i++) {
            const next = numbers[i + 1];
            const operator = operators[i];

            if (operator === '+') result += next;
            if (operator === '-') result -= next;
            if (operator === '*') result *= next;
            if (operator === '/') {
                if (next === 0) throw new Error('Divide by zero');
                result /= next;
            }
        }

        return result;
    }

    return (
        <div style={styles.page}>
            <div style={styles.card}>
                <h1 style={styles.title}>Calculator</h1>

                <input
                    type="text"
                    value={display || '0'}
                    readOnly
                    style={styles.display}
                />

                <div style={styles.buttons}>
                    {['7', '8', '9', '/'].map((btn) => (
                        <button key={btn} style={styles.btn} onClick={() => handleClick(btn)}>
                            {btn}
                        </button>
                    ))}
                    {['4', '5', '6', '*'].map((btn) => (
                        <button key={btn} style={styles.btn} onClick={() => handleClick(btn)}>
                            {btn}
                        </button>
                    ))}
                    {['1', '2', '3', '-'].map((btn) => (
                        <button key={btn} style={styles.btn} onClick={() => handleClick(btn)}>
                            {btn}
                        </button>
                    ))}
                    {['0', '.', '+'].map((btn) => (
                        <button key={btn} style={styles.btn} onClick={() => handleClick(btn)}>
                            {btn}
                        </button>
                    ))}

                    <button style={styles.equalBtn} onClick={calculateResult}>=</button>
                    <button style={styles.clearBtn} onClick={clearDisplay}>C</button>
                </div>
            </div>
        </div>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    page: {
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1f2933, #111827)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: '320px',
        backgroundColor: '#0f172a',
        padding: '20px',
        borderRadius: '20px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
    },
    title: {
        textAlign: 'center',
        color: '#e5e7eb',
        marginBottom: '15px',
    },
    display: {
        width: '100%',
        height: '60px',
        backgroundColor: '#020617',
        color: '#22c55e',
        fontSize: '26px',
        border: 'none',
        borderRadius: '12px',
        textAlign: 'right',
        padding: '0 15px',
        marginBottom: '15px',
    },
    buttons: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '10px',
    },
    btn: {
        height: '50px',
        fontSize: '18px',
        borderRadius: '12px',
        border: 'none',
        backgroundColor: '#1e293b',
        color: '#e5e7eb',
        cursor: 'pointer',
    },
    equalBtn: {
        gridColumn: 'span 2',
        height: '50px',
        fontSize: '18px',
        borderRadius: '12px',
        border: 'none',
        backgroundColor: '#22c55e',
        color: '#022c22',
        cursor: 'pointer',
    },
    clearBtn: {
        gridColumn: 'span 2',
        height: '50px',
        fontSize: '18px',
        borderRadius: '12px',
        border: 'none',
        backgroundColor: '#ef4444',
        color: '#fff',
        cursor: 'pointer',
    },
};
