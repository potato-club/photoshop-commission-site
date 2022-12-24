import { useRouter } from 'next/router';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { myPageApi } from 'src/apis/myPage';

export type MyCommentType = {
  comment: string;
  modifiedDate: string;
  title: string;
};
export const useQueryGetMyComment = (page: number) => {
  const router = useRouter();
  const [list, setList] = useState<MyCommentType[]>([]);

  const { isLoading, isError } = useQuery(
    ['getMyComment', page],
    () => myPageApi.myComment.list(page),
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
