import { useState } from 'react';
import { Typography } from 'src/components/Typography';
import { MyPageLayout } from '../components/MyPageLayout';
import { InfoItem } from './components/InfoItem';
import { ProfileLayout } from './components/ProfileLayout';
import { useProfile } from './Profile.hook';
import * as S from './Profile.style';

export const Profile = () => {
  const {
    nickname,
    introduce,
    isInfoChange,
    isIntroduceChange,
    handleChangeNickname,
    handleChangeIntroduce,
    handleInfoChange,
    handleIntroduceChange,
  } = useProfile();
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
                    onChange={handleChangeNickname}
                  />
                ) : (
                  <Typography size="16" color="black" fontWeight="bold">
                    {nickname === '' ? '양파먹는소녀' : nickname}
                  </Typography>
                )}
              </InfoItem>
              <InfoItem header="이메일">
                <Typography size="16" color="black" fontWeight="bold">
                  ohbaya@naver.com
                </Typography>
              </InfoItem>
              <InfoItem header="최초 가입일">
                <Typography size="16" color="black" fontWeight="bold">
                  2020.02.20
                </Typography>
              </InfoItem>
              <InfoItem header="직업">
                <Typography size="16" color="black" fontWeight="bold">
                  client
                </Typography>
              </InfoItem>
              <InfoItem header="평점">
                <Typography size="16" color="blue" fontWeight="bold">
                  4.3
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
                  onChange={handleChangeIntroduce}
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
