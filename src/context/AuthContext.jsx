import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext({
  isAuthenticated: false,
  user: null,
  login: () => {},
  logout: () => {},
  checkAuth: () => {},
  loading: true,
});

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const checkAuth = () => {
    try {
      const token = localStorage.getItem('antellay_token');
      const savedUser = localStorage.getItem('antellay_user');
      if (token) {
        setIsAuthenticated(true);
        setUser(savedUser ? JSON.parse(savedUser) : { name: 'VEER', role: 'Vision Architect' });
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    } catch (err) {
      console.warn('Error reading auth state:', err);
      setIsAuthenticated(false);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
    // Sync auth state across tabs
    const handleStorageChange = () => checkAuth();
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const login = (userData, token) => {
    const sessionToken = token || `antellay_session_${Date.now()}`;
    const userObj = userData || { name: 'VEER', role: 'Vision Architect' };
    localStorage.setItem('antellay_token', sessionToken);
    localStorage.setItem('antellay_user', JSON.stringify(userObj));
    setIsAuthenticated(true);
    setUser(userObj);
  };

  const logout = () => {
    localStorage.removeItem('antellay_token');
    localStorage.removeItem('antellay_user');
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, checkAuth, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
