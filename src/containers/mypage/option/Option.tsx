import { MyPageLayout } from '../components/MyPageLayout';
import { CustomButton } from './components/CustomButton';
import * as S from './Option.style';
export const Option = () => {
  const handleLogout = () => {};
  return (
    <MyPageLayout>
      <S.Container>
        <S.ButtonWrapper>
          <CustomButton
            handleClick={handleLogout}
            style={{ color: 'blue', borderColor: 'blue' }}
          >
            로그아웃
          </CustomButton>
        </S.ButtonWrapper>
        <S.ButtonWrapper>
          <CustomButton
            handleClick={handleLogout}
            style={{ color: 'white', backgroundColor: 'blue' }}
          >
            회원탈퇴
          </CustomButton>
        </S.ButtonWrapper>
      </S.Container>
    </MyPageLayout>
  );
};
