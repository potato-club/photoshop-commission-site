import styled from 'styled-components';
import { MyPageLayout } from '../components/MyPageLayout';
import { CustomButton } from './components/CustomButton';
import { useOption } from './Option.hook';
export const Option = () => {
  const { handleClickLogout, handleClickSignout } = useOption();

  return (
    <MyPageLayout>
      <Container>
        <ButtonWrapper>
          <CustomButton
            handleClick={handleClickLogout}
            style={{ color: 'blue', borderColor: 'blue' }}
          >
            로그아웃
          </CustomButton>
        </ButtonWrapper>
        <ButtonWrapper>
          <CustomButton
            handleClick={handleClickSignout}
            style={{ color: 'white', backgroundColor: 'blue' }}
          >
            회원탈퇴
          </CustomButton>
        </ButtonWrapper>
      </Container>
    </MyPageLayout>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`;
const ButtonWrapper = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
`;
