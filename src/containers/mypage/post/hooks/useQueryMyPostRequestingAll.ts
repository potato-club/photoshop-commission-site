import { useRouter } from 'next/router';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { myPageApi } from 'src/apis/myPage';
import { useGetToken } from 'src/hooks/useGetToken';
import { MyPost } from '../types/post.type';

export const useQueryMyPostRequestingAll = (page: number) => {
  const router = useRouter();
  const { access, refresh } = useGetToken();
  const [list, setList] = useState<MyPost[]>([]);

  const { isLoading, isError } = useQuery(
    ['getMyPostRequestingAll', page],
    () => myPageApi.myPost.requestingAll(page, access, refresh),
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
