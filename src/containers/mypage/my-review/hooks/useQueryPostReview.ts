import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { myPageApi } from 'src/apis/myPage';
import { PostReviewType } from 'src/apis/myPage.type';
import { MyPost } from '../../post/types/post.type';

type Props = PostReviewType;
export const useQueryPostReview = (params: PostReviewType) => {
  const [list, setList] = useState<MyPost[]>([]);
  const queryClient = useQueryClient();

  const { mutate } = useMutation(() => myPageApi.myReview.post(params), {
    onSuccess: ({ data }) => {
      setList(data);
      queryClient.invalidateQueries('getMyReview');
    },
  });

  return { mutate };
};
