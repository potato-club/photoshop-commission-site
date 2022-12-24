import { useRouter } from 'next/router';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { myPageApi } from 'src/apis/myPage';
import { Profile } from '../types/profile.type';

export const useQueryGetProfile = () => {
  const router = useRouter();
  const [profile, setProfile] = useState<Profile>();

  const { isLoading, isError } = useQuery(
    ['getProfile'],
    () => myPageApi.profile.get(),
    {
      enabled: router.isReady,
      retry: 0,
      onSuccess: ({ data }) => {
        setProfile(data);
      },
    },
  );

  return { profile, isLoading, isError };
};
