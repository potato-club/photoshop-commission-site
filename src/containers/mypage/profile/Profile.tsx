import { useState } from 'react';
import { Typography } from 'src/components/Typography';
import styled from 'styled-components';
import { MyPageLayout } from '../components/MyPageLayout';
import { InfoItem } from './components/InfoItem';
import { ProfileLayout } from './components/ProfileLayout';
import { useProfile } from './Profile.hook';

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
      <Container>
        <Wrapper>
          <ProfileLayout
            title="개인정보"
            handleClickButton={handleInfoChange}
            isChangeState={isInfoChange}
          >
            <ItemWrapper>
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
            </ItemWrapper>
          </ProfileLayout>
        </Wrapper>
        <Wrapper>
          <ProfileLayout
            title="자기소개"
            handleClickButton={handleIntroduceChange}
            isChangeState={isIntroduceChange}
          >
            <IntroduceBoxWrapper>
              {isIntroduceChange ? (
                <CustomIntroduceInput
                  value={introduce}
                  onChange={handleChangeIntroduce}
                />
              ) : (
                <div>{introduce}</div>
              )}
            </IntroduceBoxWrapper>
          </ProfileLayout>
        </Wrapper>
      </Container>
    </MyPageLayout>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Wrapper = styled.div`
  margin-bottom: 50px;
  width: 100%;
  height: 100%;
`;

const ItemWrapper = styled.div`
  padding: 30px 50px;
`;

const IntroduceBoxWrapper = styled.div`
  padding: 10px 20px;
`;
const CustomIntroduceInput = styled.textarea`
  width: 100%;
  height: 100px;
  resize: none;
`;
