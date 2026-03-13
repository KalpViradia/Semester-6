import { useAuth } from './context/AuthContext'
import { LoginComponent } from './components/LoginComponent'
import { CartComponent } from './components/CartComponent'
import './App.css'

function App() {
  const { isLoggedIn } = useAuth()

  return (
    <div className="app">
      <header className="app-header">
        <h1>Context API Demo</h1>
        <p>User Authentication & Shopping Cart</p>
      </header>

      <main className="app-main">
        <LoginComponent />
        
        {isLoggedIn() ? (
          <CartComponent />
        ) : (
          <div className="login-required">
            <p>Please log in to shop</p>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
