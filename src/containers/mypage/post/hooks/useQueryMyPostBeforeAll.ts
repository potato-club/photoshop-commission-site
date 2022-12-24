import { useRouter } from 'next/router';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { myPageApi } from 'src/apis/myPage';
import { MyPost } from '../types/post.type';

export const useQueryMyPostBeforeAll = (page: number) => {
  const router = useRouter();
  const [list, setList] = useState<MyPost[]>([]);

  const { isLoading, isError } = useQuery(
    ['getMyPostBeforeAll', page],
    () => myPageApi.myPost.beforeAll(page),
    {
      enabled: router.isReady,
      onSuccess: ({ data }) => {
        setList(data);
      },
    },
  );

  return { list, isLoading, isError };
};
