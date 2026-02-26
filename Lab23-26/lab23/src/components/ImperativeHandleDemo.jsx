import React, { useRef, useImperativeHandle, forwardRef, useState } from 'react';

const CustomInput = forwardRef((props, ref) => {
    const inputRef = useRef();

    useImperativeHandle(ref, () => ({
        focusInput: () => {
            inputRef.current.focus();
        },
        clearInput: () => {
            inputRef.current.value = "";
        }
    }));

    return (
        <input
            ref={inputRef}
            type="text"
            placeholder="Type something..."
            style={{ padding: '8px', marginRight: '10px' }}
        />
    );
});

const ImperativeHandleDemo = () => {
    const customInputRef = useRef();

    return (
        <div className="demo-container">
            <h2>useImperativeHandle Demo</h2>
            <div className="card">
                <p style={{ marginBottom: '15px' }}>Parent controlling child component functions:</p>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <CustomInput ref={customInputRef} />
                    <button onClick={() => customInputRef.current.focusInput()} style={{ backgroundColor: 'var(--primary)' }}>
                        Focus Child Input
                    </button>
                    <button onClick={() => customInputRef.current.clearInput()} style={{ color: '#f87171' }}>
                        Clear Child Input
                    </button>
                </div>
                <p style={{ marginTop: '20px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    (The child component exposes specific methods like 'focusInput' and 'clearInput' to the parent ref using <code>useImperativeHandle</code>)
                </p>
            </div>
        </div>
    );
};

export default ImperativeHandleDemo;
