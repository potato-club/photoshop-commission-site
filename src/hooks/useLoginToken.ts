import { useCookies } from './useCookies';
import { useSessionStorage } from './useSessionStorage';

export function useLoginToken() {
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
