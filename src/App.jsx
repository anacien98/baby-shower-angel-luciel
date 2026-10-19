import React, { useState, useEffect } from 'react';
import { Login } from './pages/Login';
import { Invitacion } from './pages/Invitacion';
import { DesktopBlock } from './components/DesktopBlock';
import { useIsMobile } from './hooks/useIsMobile';

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const isMobile = useIsMobile(768);

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('guestUser');
      if (savedUser) {
        setCurrentUser(JSON.parse(savedUser));
      }
    } catch (error) {
      localStorage.removeItem('guestUser');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('guestUser');
    setCurrentUser(null);
  };


  if (!isMobile) {
    return <DesktopBlock />;
  }


  if (!currentUser) {
    return <Login onLoginSuccess={(user) => setCurrentUser(user)} />;
  }


  return (
    <Invitacion currentUser={currentUser} onLogout={handleLogout} />
  );
}