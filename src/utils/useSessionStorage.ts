import React from 'react';

export default function useSessionStorage() {
  const setStorage = (key: string, item: string) => {
    sessionStorage.setItem(key, item);
  };

  const getStorage = (key: string) => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem(key) ?? '';
    }
  };

  const resetStorage = (key: string) => {
    sessionStorage.removeItem(key);
  };

  return {
    setStorage,
    getStorage,
    resetStorage,
  };
}
