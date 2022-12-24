import { CustomRadioButton } from 'src/components/CustomRadioButton';
import { Typography } from 'src/components/Typography';
import { customColor } from 'src/constants/customColor';
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
    isInfoChange,
    nickname,
    introduce,
    isIntroduceChange,
    role,
    handleChangeRole,
    handleClickInfo,
    handleClickIntroduce,
    handleChangeIntroduce,
    handleChangeNickname,
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
            handleClickButton={handleClickInfo}
            isChangeState={isInfoChange}
          >
            <ItemWrapper>
              <InfoItem header="닉네임">
                {isInfoChange ? (
                  <ProfileInput
                    value={nickname}
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
                {isInfoChange ? (
                  <>
                    <CustomRadioButton
                      id="USER"
                      label="의뢰자"
                      name="userRole"
                      selectedValue={role}
                      onChange={handleChangeRole}
                      gap={10}
                      marginLeft={0}
                      marginRight={20}
                    />
                    <CustomRadioButton
                      id="ARTIST"
                      label="디자이너"
                      name="userRole"
                      selectedValue={role}
                      onChange={handleChangeRole}
                      gap={10}
                      marginLeft={0}
                      marginRight={0}
                    />
                  </>
                ) : (
                  <Typography size="16" color="black" fontWeight="bold">
                    {profile?.userRole}
                  </Typography>
                )}
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
            handleClickButton={handleClickIntroduce}
            isChangeState={isIntroduceChange}
          >
            <IntroduceBoxWrapper>
              {isIntroduceChange ? (
                <CustomIntroduceInput
                  value={introduce}
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
const ProfileInput = styled.input`
  border-radius: 10px;
  border: 1px solid ${customColor.black};
  padding: 0 10px;
  width: 280px;
  height: 30px;
  font-size: 16px;
  :focus {
    outline: none;
  }
  ::placeholder {
    font-weight: bold;
    color: ${customColor.gray};
  }
`;

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
