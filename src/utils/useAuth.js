'use client';

import { useCallback } from 'react';

function useAuth() {
  const callbackUrl = typeof window !== 'undefined' 
    ? new URLSearchParams(window.location.search).get('callbackUrl')
    : null;

  const signInWithCredentials = useCallback(async (options) => {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(options)
      });
      
      if (!res.ok) throw new Error('Login failed');
      
      const data = await res.json();
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('token', data.token);
      
      if (callbackUrl || options.callbackUrl) {
        window.location.href = callbackUrl ?? options.callbackUrl ?? '/';
      }
      
      return data;
    } catch (error) {
      console.error('Sign in error:', error);
      throw error;
    }
  }, [callbackUrl])

  const signUpWithCredentials = useCallback((options) => {
    // Pour l'inscription, appeler directement l'API
    return fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(options)
    }).then(res => res.json());
  }, [])

  const signInWithGoogle = useCallback((options) => {
    // Placeholder for Google OAuth integration
    console.warn('Google sign-in not implemented');
    return Promise.reject(new Error('Google sign-in not implemented'));
  }, []);

  const signInWithFacebook = useCallback((options) => {
    // Placeholder for Facebook OAuth integration
    console.warn('Facebook sign-in not implemented');
    return Promise.reject(new Error('Facebook sign-in not implemented'));
  }, []);

  const signInWithTwitter = useCallback((options) => {
    // Placeholder for Twitter OAuth integration
    console.warn('Twitter sign-in not implemented');
    return Promise.reject(new Error('Twitter sign-in not implemented'));
  }, []);

  const handleSignOut = useCallback(async () => {
    try {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      window.location.href = '/';
    } catch (error) {
      console.error('Sign out error:', error);
    }
  }, []);

  return {
    signInWithCredentials,
    signUpWithCredentials,
    signInWithGoogle,
    signInWithFacebook,
    signInWithTwitter,
    signOut: handleSignOut,
  }
}

export default useAuth;