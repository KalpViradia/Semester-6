import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';

const LayoutEffectDemo = () => {
    const [show, setShow] = useState(false);
    const buttonRef = useRef(null);
    const popupRef = useRef(null);
    const [position, setPosition] = useState(0);

    useLayoutEffect(() => {
        if (show && popupRef.current && buttonRef.current) {
            const { bottom } = buttonRef.current.getBoundingClientRect();
            setPosition(bottom + 10);
        }
    }, [show]);

    return (
        <div className="demo-container">
            <h2>useLayoutEffect Demo</h2>
            <div className="card" style={{ minHeight: '300px' }}>
                <p style={{ marginBottom: '20px' }}>Measure and position elements before painting.</p>

                <button ref={buttonRef} onClick={() => setShow(!show)} style={{ background: show ? 'var(--primary)' : 'var(--bg-main)' }}>
                    {show ? "Close Tooltip" : "Expand Tooltip"}
                </button>

                {show && (
                    <div
                        ref={popupRef}
                        style={{
                            position: 'absolute',
                            top: `${position}px`,
                            padding: '12px 20px',
                            background: 'var(--primary)',
                            color: '#fff',
                            borderRadius: '8px',
                            boxShadow: '0 8px 30px rgba(59, 130, 246, 0.5)',
                            zIndex: 50,
                            fontWeight: '600'
                        }}
                    >
                        I calculated my position exactly!
                    </div>
                )}

                <div style={{ marginTop: '100px', padding: '15px', background: 'rgba(0,0,0,0.1)', borderRadius: '8px' }}>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
                        <strong>Visual Fact:</strong> Unlike <code>useEffect</code>, <code>useLayoutEffect</code> fires synchronously after all DOM mutations. This prevents any flickering when calculating element positions or sizes based on the real layout.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LayoutEffectDemo;
