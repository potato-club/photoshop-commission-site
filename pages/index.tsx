import React, { useEffect } from 'react';
import IntroPage from 'src/containers/IntroPage/IntroPage';
import { useCookies } from 'src/hooks/useCookies';
import { useSessionStorage } from 'src/hooks/useSessionStorage';

export default function Index() {
  const { setSessionStorage, removeSessionStorage } = useSessionStorage();
  const { removeCookie } = useCookies();
  useEffect(() => {
    setSessionStorage('nickname', 'GUEST');
    removeSessionStorage('access');
    removeCookie('refresh');
  }, [setSessionStorage, removeSessionStorage, removeCookie]);

  return <IntroPage />;
}
