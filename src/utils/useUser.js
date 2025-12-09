'use client';

import * as React from 'react';

const useUser = () => {
  const [user, setUser] = React.useState(null);

  // Synchroniser l'utilisateur avec la session
  React.useEffect(() => {
    // Récupérer l'utilisateur depuis localStorage ou API
    const storedUser = typeof window !== 'undefined' ? localStorage.getItem('user') : null;
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const refetch = React.useCallback(async () => {
    // Récupérer l'utilisateur depuis l'API
    try {
      const res = await fetch('/api/auth/me');
      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
        localStorage.setItem('user', JSON.stringify(data.user));
      }
    } catch (error) {
      console.error('Failed to refetch user:', error);
    }
  }, []);

  const loading = false;
  const isAuthenticated = !!user;

  return {
    user,
    data: user,
    loading,
    isAuthenticated,
    refetch,
    session: { user }
  };
};

export { useUser }
export default useUser;