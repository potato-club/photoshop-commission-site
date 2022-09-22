import Link from 'next/link';
import { Typography } from '../components/index';
import { HeaderName } from 'src/constants/header/HeaderName';
import styled, { css } from 'styled-components';
import { FaUserAlt, FaBell } from 'react-icons/fa';
import { BiLogIn, BiLogOut } from 'react-icons/bi';
import { pathName } from 'src/constants/pathName';
import { useRouter } from 'next/router';

export const Header = () => {
  const router = useRouter();
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
  const checkSession = () => {
    if (typeof window !== 'undefined') {
      console.log(localStorage.getItem('session'));
      return localStorage.getItem('session');
    }
  };

  return (
    <HeaderBox>
      <ContentBox>
        <Link href={pathName.MAIN} passHref>
          <Theme>
            <Typography color="white" size="32" fontWeight="900">
              {HeaderName.name}
            </Typography>
          </Theme>
        </Link>
        <Icons>
          <div onClick={() => callKaKaoLoginHandler()}>
            {checkSession() ? <LogoutImage /> : <LoginImage />}
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
        </Icons>
      </ContentBox>
    </HeaderBox>
  );
};

export default Header;

const iconStyles = css`
  width: 20px;
  height: 20px;
  color: white;
  padding: 8px 8px;
  border: 4px solid white;
  border-radius: 100%;
  :hover {
    color: gray;
    border: 4px solid gray;
  }
  margin-right: 5px;
`;

export const HeaderBox = styled.div`
  background-color: rgba(7, 104, 159, 1);
  width: 100%;
  height: 60px;
`;

const ContentBox = styled.div`
  display: flex;
  width: 1178px;
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
  width: 100px;
  align-items: center;
  justify-content: space-between;
`;

const LogoutImage = styled(BiLogOut)`
  ${iconStyles}
`;
const LoginImage = styled(BiLogIn)`
  ${iconStyles}
`;
const UserImage = styled(FaUserAlt)`
  ${iconStyles}
`;
const AlertImage = styled(FaBell)`
  ${iconStyles}
`;
