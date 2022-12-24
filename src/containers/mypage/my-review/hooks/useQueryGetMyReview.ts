import { useRouter } from 'next/router';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { myPageApi } from 'src/apis/myPage';

export type MyReviewType = {
  createdDate: string;
  selectedArtistNickname: string;
  title: string;
  roomId: string;
};
export const useQueryGetMyReview = (page: number) => {
  const router = useRouter();
  const [list, setList] = useState<MyReviewType[]>([]);

  const { isLoading, isError } = useQuery(
    ['getMyReview', page],
    () => myPageApi.myReview.list(page),
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
