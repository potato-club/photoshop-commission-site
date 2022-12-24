import { useRouter } from 'next/router';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { myPageApi } from 'src/apis/myPage';
import { MyPost } from '../../post/types/post.type';

export const useQueryGetMyQuest = (page: number) => {
  const router = useRouter();
  const [list, setList] = useState<MyPost[]>([]);

  const { isLoading, isError } = useQuery(
    ['getMyQuest', page],
    () => myPageApi.myQuest.list(page),
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
