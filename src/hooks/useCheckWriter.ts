import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { checkApi } from 'src/apis/check';
import { useLoginToken } from './useLoginToken';
import { useState, useEffect } from 'react';
import { useSessionStorage } from './useSessionStorage';

export const useCheckWriter = () => {
  const router = useRouter();
  const { access, refresh } = useLoginToken();
  const [myPost, setMyPost] = useState<boolean>();
  const { getSessionStorage } = useSessionStorage();
  const job = getSessionStorage('job');

  useQuery(
    ['checkWriter', router.query.id],
    () => checkApi.checkWriter({ id: router.query.id }),
    {
      enabled: !!access && !!refresh && router.isReady && job === 'USER',
      onSuccess: ({ data }) => {
        setMyPost(data);
      },
      onError: error => {
        alert('사용자정보 체크오류');
        return false;
      },
    },
  );

  return {
    myPost,
  };
};
