import React, { useState, useOptimistic } from 'react';

const OptimisticDemo = () => {
    const [messages, setMessages] = useState([
        { text: "Hello there!", sending: false }
    ]);

    // useOptimistic allows showing a "predicted" state while async work happens
    const [optimisticMessages, addOptimisticMessage] = useOptimistic(
        messages,
        (state, newMessage) => [...state, { text: newMessage, sending: true }]
    );

    const sendMessage = async (formData) => {
        const message = formData.get("message");

        // Add optimistic message immediately
        addOptimisticMessage(message);

        // Simulate network delay
        await new Promise(res => setTimeout(res, 2000));

        // Update real state
        setMessages(prev => [...prev, { text: message, sending: false }]);
    };

    return (
        <div className="demo-container">
            <h2>useOptimistic Demo</h2>
            <div className="card">
                <div style={{
                    height: '250px',
                    overflowY: 'auto',
                    marginBottom: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px'
                }}>
                    {optimisticMessages.map((m, i) => (
                        <div key={i} style={{
                            padding: '10px 14px',
                            borderRadius: '8px',
                            maxWidth: '80%',
                            alignSelf: 'flex-start',
                            background: m.sending ? 'rgba(255, 255, 255, 0.05)' : 'rgba(59, 130, 246, 0.1)',
                            border: '1px solid',
                            borderColor: m.sending ? 'var(--border)' : 'var(--primary)',
                            color: m.sending ? 'var(--text-muted)' : 'var(--text-main)',
                            fontSize: '0.95rem'
                        }}>
                            {m.text} {m.sending && <small style={{ marginLeft: '8px', opacity: 0.7 }}>(Sending...)</small>}
                        </div>
                    ))}
                </div>

                <form action={sendMessage} style={{ display: 'flex', gap: '10px' }}>
                    <input name="message" placeholder="Type a message..." required />
                    <button type="submit" style={{ width: 'auto' }}>Send</button>
                </form>
                <p style={{ marginTop: '16px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                    (Message appears instantly with 'Sending...' status for 2 seconds)
                </p>
            </div>
        </div>
    );
};

export default OptimisticDemo;
