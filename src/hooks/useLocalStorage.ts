import React from 'react';

export function useLocalStorage() {
  const setLocalStorage = (key: string, item: string) => {
    localStorage.setItem(key, item);
  };

  const getLocalStorage = (key: string) => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(key) ?? '';
    }
  };

  const removeLocalStorage = (key: string) => {
    localStorage.removeItem(key);
  };

  return {
    setLocalStorage,
    getLocalStorage,
    removeLocalStorage,
  };
}
