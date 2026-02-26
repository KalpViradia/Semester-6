import React, { useActionState } from "react";

async function submitForm(prevState, formData) {
  const name = formData.get("name");

  if (!name || name.trim() === "") {
    return { error: "Name is required!", success: null };
  }

  return { success: `Welcome, ${name}!`, error: null };
}

function FormComponent() {
  const [state, formAction, isPending] = useActionState(submitForm, {
    error: null,
    success: null,
  });

  return (
    <div className="demo-container">
      <h2>useActionState Demo</h2>
      <div className="card">
        <form action={formAction} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
            />
          </div>

          <button type="submit" disabled={isPending}>
            {isPending ? "Validating..." : "Submit Form"}
          </button>
        </form>

        {state.error && (
          <div style={{ marginTop: '15px', padding: '10px', borderRadius: '8px', background: 'rgba(239, 68, 68, 0.1)', color: '#f87171', border: '1px solid #ef4444' }}>
            {state.error}
          </div>
        )}

        {state.success && (
          <div style={{ marginTop: '15px', padding: '10px', borderRadius: '8px', background: 'rgba(34, 197, 94, 0.1)', color: '#4ade80', border: '1px solid #22c55e' }}>
            {state.success}
          </div>
        )}
      </div>
    </div>
  );
}

export default FormComponent;