import { useState } from 'react';
import { useQuery } from 'react-query';
import { myPageApi } from 'src/apis/myPage';
import { PostReviewType } from 'src/apis/myPage.type';
import { MyPost } from '../../post/types/post.type';

type Props = PostReviewType;
export const useQueryPostReview = (params: PostReviewType) => {
  const [list, setList] = useState<MyPost[]>([]);

  const { refetch, isLoading, isError } = useQuery(
    ['postReview', params],
    () => myPageApi.myReview.post(params),
    {
      enabled: false,
      retry: 0,
      onSuccess: ({ data }) => {
        setList(data);
      },
    },
  );

  return { refetch, list, isLoading, isError };
};
