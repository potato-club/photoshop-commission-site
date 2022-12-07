import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { checkApi } from 'src/apis/check';
import { useGetToken } from './useGetToken';
import { useState } from 'react';


export const useCheckWriter = () => {
  const router = useRouter();
  const { access, refresh } = useGetToken();
  const [myPost, setMyPost] = useState<boolean>();

  const { refetch: checkWriter } = useQuery(
    'checkWriter',
    () => checkApi.checkWriter({ id: router.query.id }, access, refresh),
    {
      enabled: false,
      onSuccess: ({ data }) => {
        setMyPost(data);
        return data;
      },
      onError: error => {
        alert('사용자정보 체크오류');
      },
    },
  );

  return {
    myPost,
    checkWriter,
  };
};
