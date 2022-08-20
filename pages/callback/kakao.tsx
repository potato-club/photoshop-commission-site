import axios from 'axios';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import React, { useEffect } from 'react';
import { tokenService } from 'src/utils/useToken';

export default function CheckToken() {
  const router = useRouter();
  const { code }: ParsedUrlQuery = router.query;

  useEffect(() => {
    if (!router.isReady) return;
    if (!code) {
      console.log('카카오에서 코드를 받는데 실패함');
    } else {
      console.log('카카오 코드있음');
      console.log(code);
    }
  }, [router.isReady, code]);

  return <div>kakao</div>;
}
