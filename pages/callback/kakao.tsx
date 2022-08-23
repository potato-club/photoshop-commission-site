import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import React, { useCallback, useEffect } from 'react';
import { signUpApi } from 'src/apis';
import { Typography } from 'src/components';
import useLocalStorage from 'src/utils/useLocalStorage';

export default function CheckToken() {
  const router = useRouter();
  const { code }: ParsedUrlQuery = router.query;
  const { setStorage } = useLocalStorage();

  const checkUser = useCallback(async () => {
    const { data } = await signUpApi.checkUser({
      params: {
        code,
      },
    });

    // 받는거(최초 로그인일때) : 이메일, 메세지
    if (data.email) {
      console.log("이메일!")
      setStorage('email', data.email);
      router.push('/signUp');
      return;
    }
    // 최초 로그인이 아닐때 : 세션, 메세지
    if (data.session) {
      console.log('세션!');
      setStorage('session', data.session);
      router.push('/main');
      return;
    }

  }, [code, setStorage, router]);

  useEffect(() => {
    if (!router.isReady) return;
    if (!code) {
      console.log('카카오에서 코드를 받는데 실패함');
    } else {
      console.log('카카오 코드있음');
      console.log(String(code));
      checkUser();
    }
  }, [router.isReady, code, checkUser]);

  return <Typography size='20'>로그인 중입니다...</Typography>;
}
