import { useMutation } from 'react-query';
import { myPageApi } from 'src/apis/myPage';

export const useResign = () => {
  const { mutate, isLoading, isError } = useMutation(
    () => myPageApi.resign(),
    {
      retry: 0,
      onSuccess: ({ data }) => {},
    },
  );

  return { mutate, isLoading, isError };
};
