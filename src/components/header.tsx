import Link from 'next/link';
import { Typography } from '../components/index';
import { HeaderName } from 'src/constants/header/HeaderName';
import styled, { css } from 'styled-components';
import { FaUserAlt, FaBell } from 'react-icons/fa';
import { FiLogOut, FiLogIn } from 'react-icons/fi';
import { BsBrightnessHigh } from 'react-icons/bs';
import { MdOutlineDarkMode } from 'react-icons/md';
import { pathName } from 'src/constants/pathName';
import { useDispatch } from 'react-redux';
import { useGetToken } from 'src/hooks/useGetToken';
import { useSessionStorage } from 'src/hooks/useSessionStorage';
import { blackMode, whiteMode } from 'src/redux-toolkit/slice/settingModeSlice';
import { useCurrentMode } from 'src/hooks/useCurrentMode';
import { useKaKaoLogin } from 'src/hooks/useKaKaoLogin';

export const Header = () => {
  const dispatch = useDispatch();
  const { backgroundColor } = useCurrentMode();
  const { access, refresh } = useGetToken();
  const {login, logout} = useKaKaoLogin();

  return (
    <HeaderBox>
      <ContentBox>
        <Link href={pathName.MAIN} passHref>
          <Theme>
            <Typography color="white" size="32" fontWeight="bold">
              {HeaderName.name}
            </Typography>
          </Theme>
        </Link>
        <Icons>
          <div>
            {!access || !refresh ? (
              <LoginImage onClick={login} />
            ) : (
              <LogoutImage onClick={logout} />
            )}
          </div>

          <Link href={pathName.MYPAGE.PROFILE}>
            <a>
              <UserImage />
            </a>
          </Link>

          <Link href="/alert">
            <a>
              <AlertImage />
            </a>
          </Link>
          {backgroundColor === 'white' ? (
            <BrightImage onClick={() => dispatch(blackMode())} />
          ) : (
            <DarkImage onClick={() => dispatch(whiteMode())} />
          )}
        </Icons>
      </ContentBox>
    </HeaderBox>
  );
};

export default Header;

const iconStyles = css`
  width: 45px;
  height: 45px;
  color: white;
  padding: 8px 8px;
  border: 4px solid white;
  border-radius: 100%;
  :hover {
    border: 4px solid gray;
    color: gray;
  }
  margin-right: 8px;
`;

export const HeaderBox = styled.div`
  background-color: rgba(7, 104, 159, 1);
  width: 100%;
  height: 60px;
`;

const ContentBox = styled.div`
  display: flex;
  width: 100%;
  max-width: 1178px;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin: auto auto;
`;

const Theme = styled.a`
  text-decoration: none;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoutImage = styled(FiLogOut)`
  ${iconStyles}
`;
const LoginImage = styled(FiLogIn)`
  ${iconStyles}
`;
const UserImage = styled(FaUserAlt)`
  ${iconStyles}
`;
const AlertImage = styled(FaBell)`
  ${iconStyles}
`;
const DarkImage = styled(MdOutlineDarkMode)`
  ${iconStyles}
`;
const BrightImage = styled(BsBrightnessHigh)`
  ${iconStyles}
`;
