import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  const login = (email) => {
    setLoading(true);
    try {
      setTimeout(() => {
        const userData = {
          id: Math.random().toString(36).substr(2, 9),
          email: email,
          name: email.split('@')[0],
          loginTime: new Date().toLocaleTimeString()
        };
        setUser(userData);
        setIsAuthenticated(true);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Login failed:', error);
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  const isLoggedIn = () => {
    return isAuthenticated && user !== null;
  };

  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    logout,
    isLoggedIn
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
