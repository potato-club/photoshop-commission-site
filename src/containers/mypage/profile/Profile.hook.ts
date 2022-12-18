import { ChangeEvent, useState } from 'react';
import { errorModal } from 'src/utils/interactionModal';
import { useQueryGetProfile } from './hooks/useQueryGetProfileApi';

export const useProfile = () => {
  const [inputNickname, setInputNickname] = useState('');
  const [inputIntroduce, setInputIntroduce] = useState('안녕하세요.');
  const [isInfoChange, setIsInfoChange] = useState(false);
  const [isIntroduceChange, setIsIntroduceChange] = useState(false);
  const { profile, isLoading, isError } = useQueryGetProfile();
  const handleChangeNickname = (e: ChangeEvent<HTMLInputElement>) => {
    setInputNickname(e.target.value);
  };
  const handleChangeIntroduce = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputIntroduce(e.target.value);
  };
  const handleInfoChange = async () => {
    try {
      if (isInfoChange) {
        if (inputNickname.length > 8) {
          errorModal('닉네임은 8글자 이하로 설정해주세요');
          return;
        } else if (inputNickname.length === 0) {
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
        if (inputIntroduce === '') {
          errorModal('자기소개를 작성해주세요');
          return;
        }
        //Todo: API에 저장하기
        setIsIntroduceChange(false);
      } else {
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
    inputNickname,
    inputIntroduce,
    isInfoChange,
    isIntroduceChange,
    handleChangeNickname,
    handleChangeIntroduce,
    handleInfoChange,
    handleIntroduceChange,
  };
};
