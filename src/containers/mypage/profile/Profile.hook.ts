import { useEffect, useState } from 'react';
import { useSessionStorage } from 'src/hooks/useSessionStorage';
import { errorModal, infoModal } from 'src/utils/interactionModal';
import { useQueryEditProfile } from './hooks/useQueryEditProfileApi';
import { useQueryGetProfile } from './hooks/useQueryGetProfileApi';
import { useQueryClient } from 'react-query';

export const useProfile = () => {
  const [isInfoChange, setIsInfoChange] = useState(false);
  const [isIntroduceChange, setIsIntroduceChange] = useState(false);
  const { profile, isLoading, isError } = useQueryGetProfile();
  const [role, setRole] = useState<string>('');
  const [nickname, setNickname] = useState('');
  const [introduce, setIntroduce] = useState('');
  const { setSessionStorage } = useSessionStorage();
  const queryClient = useQueryClient();

  const { mutate } = useQueryEditProfile({
    nickname: nickname === '' || !isInfoChange ? undefined : nickname,
    introduction:
      introduce === '' || !isIntroduceChange ? undefined : introduce,
    userRole: role === '' || !isInfoChange ? undefined : role,
  });

  useEffect(() => {
    if (profile && isInfoChange) setRole(profile?.userRole);
  }, [isInfoChange, profile]);

  const handleClickInfo = async () => {
    try {
      if (isInfoChange) {
        if (nickname.length > 8) {
          errorModal('닉네임은 8글자 이하로 설정해주세요');
          return;
        } else if (nickname === '') {
          errorModal('닉네임을 입력해주세요.');
          return;
        }
        mutate();
        
        setIsInfoChange(false);
        infoModal('회원정보가 수정되었습니다.', 'success', undefined, () => {
          setSessionStorage('nickname', nickname);
          setSessionStorage('job', role);
          queryClient.invalidateQueries('getProfile');
        });
      } else {
        setNickname(profile?.nickname ?? '');
        setIsInfoChange(true);
      }
    } catch (e) {
      console.log('handleInfoChange ERROR', e);
    }
  };

  const handleClickIntroduce = async () => {
    try {
      if (isIntroduceChange) {
        if (introduce === '') {
          errorModal('자기소개를 작성해주세요');
          return;
        }
        mutate();
        setIsIntroduceChange(false);
        infoModal('회원정보가 수정되었습니다.', 'success');
        queryClient.invalidateQueries('getProfile');
      } else {
        setIntroduce(profile?.introduction ?? '');
        setIsIntroduceChange(true);
      }
    } catch (e) {
      console.log('handleIntroduceChange ERROR: ', e);
    }
  };
  const handleChangeRole = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRole(event.currentTarget.value);
  };
  const handleChangeNickname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.currentTarget.value);
  };
  const handleChangeIntroduce = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setIntroduce(event.currentTarget.value);
  };
  return {
    profile,
    isLoading,
    isError,
    nickname,
    introduce,
    isInfoChange,
    isIntroduceChange,
    role,
    handleChangeRole,
    handleClickInfo,
    handleClickIntroduce,
    handleChangeIntroduce,
    handleChangeNickname,
  };
};
