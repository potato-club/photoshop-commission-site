import React from 'react';

export function useLocalStorage() {
  const setStorage = (key: string, item: string) => {
    localStorage.setItem(key, item);
  };

  const getStorage = (key: string) => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(key) ?? '';
    }
  };

  const resetStorage = (key: string) => {
    localStorage.removeItem(key);
  };

  return {
    setStorage,
    getStorage,
    resetStorage
  }
}
