import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../redux/slices/authSlice';
import './LoginComponent.css';

export function LoginComponent() {
  const dispatch = useDispatch();
  const { user, isAuthenticated, loading } = useSelector(state => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login(email));
      setEmail('');
      setPassword('');
    }
  };

  if (isAuthenticated && user) {
    return (
      <div className="auth-container">
        <div className="user-info">
          <h2>Welcome, {user.name}!</h2>
          <p>Email: {user.email}</p>
          <p>Logged in at: {user.loginTime}</p>
          <button onClick={() => dispatch(logout())} className="logout-btn">
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <form onSubmit={handleLogin}>
        <h2>User Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}
