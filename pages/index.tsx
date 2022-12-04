import React, { useEffect } from 'react';
import { useSessionStorage } from 'src/hooks/useSessionStorage';

export default function Intro() {
  const { setSessionStorage } = useSessionStorage();
  useEffect(() => {
    setSessionStorage('nickName', 'GUEST');
  }, [setSessionStorage]);
  
  return <div>인트로페이지</div>;
}
