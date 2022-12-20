import { useRouter } from 'next/router';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { myPageApi } from 'src/apis/myPage';

export type RateReview = {
  content: string;
  createdDate: string;
  grade: string;
  nickname: string;
};
export const useQueryGetRate = (page: number) => {
  const router = useRouter();
  const [list, setList] = useState<RateReview[]>([]);

  const { isLoading, isError } = useQuery(
    ['getMyPostBeforeAll', page],
    () => myPageApi.rate.list(page),
    {
      enabled: router.isReady,
      retry: 0,
      onSuccess: ({ data }) => {
        setList(data);
      },
    },
  );

  return { list, isLoading, isError };
};
