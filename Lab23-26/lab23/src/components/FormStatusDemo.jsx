import React from 'react';
import { useFormStatus } from 'react-dom';

function SubmitButton() {
    const { pending, data, method, action } = useFormStatus();

    return (
        <button type="submit" disabled={pending} style={{ padding: '8px 16px' }}>
            {pending ? "Processing..." : "Submit Form"}
        </button>
    );
}

function StatusDisplay() {
    const { pending, data } = useFormStatus();

    if (pending) {
        return <p style={{ color: 'orange' }}>Submitting: {data?.get("username")}...</p>;
    }
    return null;
}

const FormStatusDemo = () => {
    const handleSubmit = async (formData) => {
        // Artificial delay
        await new Promise(res => setTimeout(res, 2000));
        alert(`Successfully submitted user: ${formData.get("username")}`);
    };

    return (
        <div className="demo-container">
            <h2>useFormStatus Demo</h2>
            <div className="card">
                <form action={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '400px' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Username</label>
                        <input name="username" placeholder="Enter username" required />
                    </div>
                    <SubmitButton />
                    <StatusDisplay />
                </form>
                <p style={{ marginTop: '20px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    (Submission status is accessed by child components without prop passing)
                </p>
            </div>
        </div>
    );
};

export default FormStatusDemo;
