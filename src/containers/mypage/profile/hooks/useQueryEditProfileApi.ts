import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { myPageApi } from 'src/apis/myPage';
import { EditProfileType } from 'src/apis/myPage.type';
import { useSessionStorage } from 'src/hooks/useSessionStorage';
import { Profile } from '../types/profile.type';

export const useQueryEditProfile = (params: EditProfileType) => {
  const [profile, setProfile] = useState<Profile>();

  const { isLoading, isError, refetch } = useQuery(
    ['editProfile'],
    () => myPageApi.profile.edit(params),
    {
      enabled: false,
      onSuccess: ({ data }) => {
        setProfile(data);
      },
    },
  );

  return { profile, isLoading, isError, refetch };
};
