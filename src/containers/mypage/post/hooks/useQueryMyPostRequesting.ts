import { useRouter } from 'next/router';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { myPageApi } from 'src/apis/myPage';
import { MyPost } from '../types/post.type';

export const useQueryMyPostRequesting = () => {
  const router = useRouter();
  const [list, setList] = useState<MyPost[]>([]);

  const { isLoading, isError } = useQuery(
    ['getMyPostRequesting'],
    () => myPageApi.myPost.requesting(),
    {
      enabled: router.isReady,
      onSuccess: ({ data }) => {
        setList(data);
      },
    },
  );

  return { list, isLoading, isError };
};
