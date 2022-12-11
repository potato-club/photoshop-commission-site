import React from 'react';

export function useSessionStorage() {
  const setSessionStorage = (key: string, item: string) => {
    sessionStorage.setItem(key, item);
  };

  const getSessionStorage = (key: string) => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem(key) ?? '';
    }
  };

  const removeSessionStorage = (key: string) => {
    sessionStorage.removeItem(key);
  };

  return {
    setSessionStorage,
    getSessionStorage,
    removeSessionStorage,
  };
}
