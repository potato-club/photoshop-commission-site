import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { myPageApi } from 'src/apis/myPage';
import { EditProfileType } from 'src/apis/myPage.type';
import { errorModal } from 'src/utils/interactionModal';
import { Profile } from '../types/profile.type';

export const useQueryEditProfile = (params: EditProfileType) => {
  const [profile, setProfile] = useState<Profile>();


  const { mutate, isLoading, isError } = useMutation(() => myPageApi.profile.edit(params), {
    onSuccess: ({data}) => {
      setProfile(data);
    },
    onError: error => {
      errorModal('회원정보수정 오류', '닉네임이 중복됩니다.');
      console.log(error);
    },
  });

  return { profile, isLoading, isError, mutate };
};
