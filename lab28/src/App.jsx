import { useSelector } from 'react-redux';
import { LoginComponent } from './components/LoginComponent';
import { CartComponent } from './components/CartComponent';
import './App.css';

function App() {
  const { isAuthenticated } = useSelector(state => state.auth);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Redux Toolkit Demo</h1>
        <p>User Authentication & Shopping Cart</p>
      </header>

      <main className="app-main">
        <LoginComponent />
        
        {isAuthenticated ? (
          <CartComponent />
        ) : (
          <div className="login-required">
            <p>Please log in to shop</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
