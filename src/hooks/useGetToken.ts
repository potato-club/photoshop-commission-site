import React from 'react';
import { useCookies } from './useCookies';
import { useSessionStorage } from './useSessionStorage';

export function useGetToken() {
    const { getCookie, removeCookie } = useCookies();
    const { getSessionStorage, removeSessionStorage } = useSessionStorage();
    const access = getSessionStorage('access');
    const refresh = getCookie('refresh');
    const resetToken = () => {
      removeSessionStorage('access');
      removeCookie('refresh');
    }
  return {
    access,
    refresh,
    resetToken,
  };
}
