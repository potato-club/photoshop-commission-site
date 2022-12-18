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
import { useRouter } from 'next/router';
import { useGetToken } from 'src/hooks/useGetToken';
import { infoModal } from 'src/utils/interactionModal';
import { useSessionStorage } from 'src/hooks/useSessionStorage';
import { blackMode, whiteMode } from 'src/redux-toolkit/slice/settingModeSlice';
import { useCurrentMode } from 'src/hooks/useCurrentMode';

export const Header = () => {
  const dispatch = useDispatch();
  const { backgroundColor } = useCurrentMode();
  const router = useRouter();
  const { access, refresh, resetToken } = useGetToken();
  const { removeSessionStorage, setSessionStorage } = useSessionStorage();
  const callKaKaoLoginHandler = () => {
    router.push({
      pathname: process.env.NEXT_PUBLIC_PATHNAME,
      query: {
        response_type: process.env.NEXT_PUBLIC_RESPONSE_TYPE,
        client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
        redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI,
      },
    });
  };

  const logOut = () => {
    resetToken();
    removeSessionStorage('job');
    setSessionStorage('nickname', 'GUEST');
    infoModal('로그아웃이 완료되었습니다.', 'success', undefined, () =>
      location.reload(),
    );
  };

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
              <LoginImage onClick={() => callKaKaoLoginHandler()} />
            ) : (
              <LogoutImage onClick={() => logOut()} />
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
