import React from 'react';
import { useCookies } from './useCookies';
import { useSessionStorage } from './useSessionStorage';

export function useGetToken() {
    const { getCookie } = useCookies();
    const { getSessionStorage } = useSessionStorage();
    const access = getSessionStorage('access');
    const refresh = getCookie('refresh');
  return {
    access,
    refresh
  };
}
