import Link from 'next/link';
import { Typography } from '../components/index';
import { HeaderName } from 'src/constants/header/HeaderName';
import styled from 'styled-components';
import { FaUserAlt } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
import { pathName } from 'src/constants/pathName';

export const Header = () => {
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

const UserImage = styled(FaUserAlt)`
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
`;

const AlertImage = styled(FaBell)`
  width: 20px;
  height: 20px;
  color: white;
  padding: 8px 8px;
  border: 4px solid white;
  border-radius: 100%;
  :hover {
    border: 4px solid gray;
    color: gray;
  }
`;
