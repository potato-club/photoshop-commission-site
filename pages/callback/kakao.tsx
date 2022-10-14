import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import React, { useCallback, useEffect } from 'react';
import { signUpApi } from 'src/apis';
import { Typography } from 'src/components';
import { useCookies } from 'src/hooks/useCookies';
import { useSessionStorage } from 'src/hooks/useSessionStorage';

export default function CheckToken() {
  const router = useRouter();
  const { code }: ParsedUrlQuery = router.query;
  const { setSessionStorage } = useSessionStorage();
  const { setCookie } = useCookies();

  const checkUser = useCallback(async () => {
    const { data, headers } = await signUpApi.checkUser({
      params: {
        code,
      },
    });
    console.log(data);
    console.log(headers);

    // 회원가입을 제대로 하지 않고 중간에 나갔을때 : fail
    if (data.fail) {
      alert(
        '이전에 회원가입이 제대로 진행되지 않았습니다. 다시 로그인 해주세요.',
      );
      router.push('/main');
    }

    // 받는거(최초 로그인일때) : 이메일, 메세지
    if (data.SerialCode) {
      setSessionStorage('serialCode', data.SerialCode);
      router.push('/signUp');
      return;
    }

    // 최초 로그인이 아닐때 : 액세스토큰
    if (data.session) {
      console.log('액세스 토큰', headers.authorization); // authorization : 액세스 토큰
      setSessionStorage('리프레쉬 토큰', headers.refreshToken); // refreshToken : 리프레쉬 토큰
      router.push('/main');
      return;
    }
  }, [code, setSessionStorage, router]);

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

  return <Typography size="20">로그인 중입니다...</Typography>;
}
