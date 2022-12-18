import { ChangeEvent, LegacyRef, useEffect, useRef, useState } from 'react';
import { errorModal } from 'src/utils/interactionModal';
import { useQueryGetProfile } from './hooks/useQueryGetProfileApi';

export const useProfile = () => {
  const [isInfoChange, setIsInfoChange] = useState(false);
  const [isIntroduceChange, setIsIntroduceChange] = useState(false);
  const { profile, isLoading, isError } = useQueryGetProfile();
  const nicknameRef = useRef<HTMLInputElement>(null);
  const introduceRef = useRef<HTMLTextAreaElement>(null);

  const handleInfoChange = async () => {
    try {
      if (isInfoChange) {
        if (nicknameRef.current!.value.length > 8) {
          errorModal('닉네임은 8글자 이하로 설정해주세요');
          return;
        } else if (nicknameRef.current!.value === '') {
          errorModal('닉네임을 입력해주세요.');
          return;
        }
        //Todo: API에 저장하기

        setIsInfoChange(false);
      } else {
        setIsInfoChange(true);
      }
    } catch (e) {
      console.log('handleInfoChange ERROR', e);
    }
  };

  const handleIntroduceChange = async () => {
    try {
      if (isIntroduceChange) {
        if (introduceRef.current!.value === '') {
          errorModal('자기소개를 작성해주세요');
          return;
        }
        //Todo: API에 저장하기
        setIsIntroduceChange(false);
      } else {
        introduceRef.current!.value = profile?.introduction ?? '';
        setIsIntroduceChange(true);
      }
    } catch (e) {
      console.log('handleIntroduceChange ERROR: ', e);
    }
  };

  return {
    profile,
    isLoading,
    isError,

    isInfoChange,
    isIntroduceChange,
    nicknameRef,
    introduceRef,
    handleInfoChange,
    handleIntroduceChange,
  };
};
