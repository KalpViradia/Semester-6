import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return initialState;
        default:
            throw new Error();
    }
}

const ReducerDemo = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="demo-container">
            <h2>useReducer Demo</h2>
            <div className="card">
                <h3 style={{ marginBottom: '20px' }}>Count: <span style={{ color: 'var(--primary)' }}>{state.count}</span></h3>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
                    <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
                    <button onClick={() => dispatch({ type: 'reset' })} style={{ color: '#f87171' }}>Reset</button>
                </div>
            </div>
        </div>
    );
};

export default ReducerDemo;
