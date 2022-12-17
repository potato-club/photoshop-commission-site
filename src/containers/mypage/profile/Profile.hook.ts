import { ChangeEvent, ChangeEventHandler, useState } from 'react';
import { errorModal } from 'src/utils/interactionModal';

export const useProfile = () => {
  const [nickname, setNickname] = useState('');
  const [introduce, setIntroduce] = useState('안녕하세요.');
  const [isInfoChange, setIsInfoChange] = useState(false);
  const [isIntroduceChange, setIsIntroduceChange] = useState(false);

  const handleChangeNickname = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };
  const handleChangeIntroduce = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setIntroduce(e.target.value);
  };
  const handleInfoChange = async () => {
    try {
      if (isInfoChange) {
        if (nickname.length > 8) {
          errorModal('닉네임은 8글자 이하로 설정해주세요');
          return;
        } else if (nickname.length === 0) {
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
        if (introduce === '') {
          //Todo: 자기소개 공백안된다고 경고모달 들어가야함
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
    nickname,
    introduce,
    isInfoChange,
    isIntroduceChange,
    handleChangeNickname,
    handleChangeIntroduce,
    handleInfoChange,
    handleIntroduceChange,
  };
};
