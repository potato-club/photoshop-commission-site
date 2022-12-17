import { useRouter } from 'next/router';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { mainApi } from 'src/apis/mainPage';
import { useGetToken } from 'src/hooks/useGetToken';
import { Profile } from '../type/profile.type';

export const useQueryGetProfile = () => {
  const router = useRouter();
  const { access, refresh } = useGetToken();
  const [profile, setProfile] = useState<Profile>();

  const { isLoading, isError } = useQuery(
    ['getProfile'],
    () => mainApi.profile(access, refresh),
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
