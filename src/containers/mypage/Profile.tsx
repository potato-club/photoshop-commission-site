import { useState } from 'react';
import { Typography } from 'src/components/Typography';
import { MyPageLayout } from './components/MyPageLayout';
import { InfoItem, ProfileLayout } from './components/profile';
import * as S from './Profile.style';

const dummyInfo = {
  nickName: '양파먹는 소녀',
  email: 'ohbaya@naver.com',
  createDate: '2020.02.20',
  job: 'client',
  rate: '4.3',
};
export const Profile = () => {
  const [nickname, setNickname] = useState('');
  const [introduce, setIntroduce] = useState('안녕하세요.');
  const [isInfoChange, setIsInfoChange] = useState(false);
  const [isIntroduceChange, setIsIntroduceChange] = useState(false);

  const handleInfoChange = async () => {
    try {
      if (isInfoChange) {
        if (nickname.length > 8) {
          alert('닉네임은 8글자 이하로 설정해주세요');
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
        //Todo: API에 저장하기
        setIsIntroduceChange(false);
      } else {
        setIsIntroduceChange(true);
      }
    } catch (e) {
      console.log('handleIntroduceChange ERROR: ', e);
    }
  };
  return (
    <MyPageLayout>
      <S.Container>
        <S.Wrapper>
          <ProfileLayout
            title="개인정보"
            handleClickButton={handleInfoChange}
            isChangeState={isInfoChange}
          >
            <S.ItemWrapper>
              <InfoItem header="닉네임">
                {isInfoChange ? (
                  <input
                    value={nickname}
                    placeholder="닉네임은 8글자 이하"
                    onChange={e => setNickname(e.target.value)}
                  />
                ) : (
                  <Typography size="16" color="black" fontWeight="bold">
                    {nickname}
                  </Typography>
                )}
              </InfoItem>
              <InfoItem header="이메일">
                <Typography size="16" color="black" fontWeight="bold">
                  {dummyInfo.email}
                </Typography>
              </InfoItem>
              <InfoItem header="최초 가입일">
                <Typography size="16" color="black" fontWeight="bold">
                  {dummyInfo.createDate}
                </Typography>
              </InfoItem>
              <InfoItem header="직업">
                <Typography size="16" color="black" fontWeight="bold">
                  {dummyInfo.job}
                </Typography>
              </InfoItem>
              <InfoItem header="평점">
                <Typography size="16" color="blue" fontWeight="bold">
                  {dummyInfo.rate}
                </Typography>
              </InfoItem>
            </S.ItemWrapper>
          </ProfileLayout>
        </S.Wrapper>
        <S.Wrapper>
          <ProfileLayout
            title="자기소개"
            handleClickButton={handleIntroduceChange}
            isChangeState={isIntroduceChange}
          >
            <S.IntroduceBoxWrapper>
              {isIntroduceChange ? (
                <S.CustomIntroduceInput
                  value={introduce}
                  onChange={e => setIntroduce(e.target.value)}
                />
              ) : (
                <div>{introduce}</div>
              )}
            </S.IntroduceBoxWrapper>
          </ProfileLayout>
        </S.Wrapper>
      </S.Container>
    </MyPageLayout>
  );
};
