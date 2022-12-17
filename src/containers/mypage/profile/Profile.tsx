import { Typography } from 'src/components/Typography';
import styled from 'styled-components';
import { ErrorMessage } from '../components/ErrorMessage';
import { LoadingMessage } from '../components/LoadingMessage';
import { MyPageLayout } from '../components/MyPageLayout';
import { InfoItem } from './components/InfoItem';
import { ProfileLayout } from './components/ProfileLayout';
import { useProfile } from './Profile.hook';

export const Profile = () => {
  const {
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
  } = useProfile();
  if (isLoading) {
    return (
      <MyPageLayout>
        <Container>
          <LoadingMessage>내 정보를 불러오고 있습니다</LoadingMessage>
        </Container>
      </MyPageLayout>
    );
  }
  if (isError) {
    return (
      <MyPageLayout>
        <Container>
          <ErrorMessage>내 정보를 불러오는데 실패했습니다</ErrorMessage>
        </Container>
      </MyPageLayout>
    );
  }
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
                    value={inputNickname}
                    placeholder="닉네임은 8글자 이하"
                    onChange={handleChangeNickname}
                  />
                ) : (
                  <Typography size="16" color="black" fontWeight="bold">
                    {profile?.nickname}
                  </Typography>
                )}
              </InfoItem>
              <InfoItem header="이메일">
                <Typography size="16" color="black" fontWeight="bold">
                  {profile?.email}
                </Typography>
              </InfoItem>
              <InfoItem header="최초 가입일">
                <Typography size="16" color="black" fontWeight="bold">
                  {profile?.createdDate}
                </Typography>
              </InfoItem>
              <InfoItem header="직업">
                <Typography size="16" color="black" fontWeight="bold">
                  {profile?.userRole}
                </Typography>
              </InfoItem>
              <InfoItem header="평점">
                <Typography size="16" color="blue" fontWeight="bold">
                  {profile?.grade}
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
                  value={inputIntroduce}
                  onChange={handleChangeIntroduce}
                />
              ) : (
                <div> {profile?.introduction}</div>
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
