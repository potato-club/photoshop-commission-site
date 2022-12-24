import { useQuery } from 'react-query';
import { myPageApi } from 'src/apis/myPage';
import { PostReviewType } from 'src/apis/myPage.type';

export const useQuerySignOut = () => {
  const { refetch, isLoading, isError } = useQuery(
    ['signOut'],
    () => myPageApi.signOut(),
    {
      retry: 0,
      enabled: false,
      onSuccess: ({ data }) => {},
    },
  );

  return { refetch, isLoading, isError };
};
