import { useRouter } from 'next/router';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { myPageApi } from 'src/apis/myPage';

export const useQueryGetGradeApi = () => {
  const router = useRouter();
  const [grade, setGrade] = useState<string>();

  const { isLoading, isError } = useQuery(
    ['getGrade'],
    () => myPageApi.rate.myGrade(),
    {
      enabled: router.isReady,
      retry: 0,
      onSuccess: ({ data }) => {
        setGrade(data);
      },
    },
  );

  return { grade, isLoading, isError };
};
