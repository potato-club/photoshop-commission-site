import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { checkApi } from 'src/apis/check';
import { useGetToken } from './useGetToken';
import { useState, useEffect } from "react";


export const useCheckWriter = () => {
  const router = useRouter();
  const { access, refresh } = useGetToken();
  const [myPost, setMyPost] = useState<boolean>();

  useQuery(
    ['checkWriter', router.query.id, access, refresh],
    () => checkApi.checkWriter({ id: router.query.id }, access, refresh),
    {
      enabled: !!access && !!refresh && router.isReady,
      onSuccess: ({ data }) => {
        setMyPost(data);
      },
      onError: error => {
        alert('사용자정보 체크오류');
        return false;
      },
    },
  );

  useEffect(() => {
    console.log(myPost);
  }, [myPost])

  return {
    myPost,
  };
};
