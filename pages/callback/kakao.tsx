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
    const allData = await signUpApi.checkUser({
      params: {
        code,
      },
    });

    console.log(allData);
    console.log('======================');
    console.log('이 아래가 헤더임. 여기에 토큰들값이 들어가있으면 됨');
    console.log(allData.headers);
    console.log('======================');


    // 회원가입을 제대로 하지 않고 중간에 나갔을때 : fail
    if (allData.data.fail) {
      router.push('/main');
      alert(
        '이전에 회원가입이 제대로 진행되지 않았습니다. 다시 로그인 해주세요.',
      );
    }

    // 받는거(최초 로그인일때) : 이메일, 메세지
    if (allData.data.SerialCode) {
      setStorage('serialCode', allData.data.SerialCode);
      router.push('/signUp');
      return;
    }

    // 최초 로그인이 아닐때 : 세션, 메세지
    if (allData.data.session) {
      console.log('세션!');
      setStorage('session', allData.data.session);
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

  return <Typography size="20">로그인 중입니다...</Typography>;
}
