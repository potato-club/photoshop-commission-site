import Link from 'next/link';
import styled, { css } from 'styled-components';
import { FaUserAlt, FaBell } from 'react-icons/fa';
import { FiLogOut, FiLogIn } from 'react-icons/fi';
import { BsBrightnessHigh } from 'react-icons/bs';
import { MdOutlineDarkMode } from 'react-icons/md';
import { pathName } from 'src/constants/pathName';
import { customColor } from 'src/constants';
import Image from 'next/image';
import { myLoader } from 'src/utils/myLoader';

export const Header = () => {
  // const dispatch = useDispatch();
  // const { backgroundColor } = useCurrentMode();
  // const { access, refresh } = useLoginToken();
  // const {login, logout} = useKaKaoLogin();




  return (
    <HeaderBox>
      <ContentBox>
        <Link href={pathName.MAIN} passHref>
          <Theme>
            <Image loader={myLoader} src={'brandImage.png'} layout="fill" alt="brandImage" />
          </Theme>
        </Link>
        <Icons>
          {/* <div>
            {!access || !refresh ? (
              <LoginImage onClick={login} />
            ) : (
              <LogoutImage onClick={logout} />
            )}
          </div> */}

          <Link href={pathName.MYPAGE.PROFILE}>
            <a>
              <UserImage />
            </a>
          </Link>

          {/* <Link href="/alert">
            <a>
              <AlertImage />
            </a>
          </Link>
          {backgroundColor === 'white' ? (
            <BrightImage onClick={() => dispatch(blackMode())} />
          ) : (
            <DarkImage onClick={() => dispatch(whiteMode())} />
          )} */}
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
    color: ${customColor.gray};
  }
  margin-right: 8px;
`;

export const HeaderBox = styled.div`
  background-color: ${customColor.blue};
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentBox = styled.div`
  display: flex;
  width: 100%;
  max-width: 1178px;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Theme = styled.a`
  text-decoration: none;
  width: 120px;
  aspect-ratio: 2.4;
  position: relative;
  :hover {
    transform: scale(1.01);
  }
  :active {
    transform: scale(0.99);
  }
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
