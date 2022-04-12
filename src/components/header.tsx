import Image from 'next/image';
import user from '../assets/image/user.png';
import alert from '../assets/image/alert.png';
import Link from 'next/link';
import styled from 'styled-components';

const Header = () => {
  return (
    <>
      <HeaderBox>
        <ContentBox>
          <Link href="/" passHref>
            <Theme>가나다 포토샵</Theme>
          </Link>
          <Icons>
            <Link href="/user">
              <a>
                <UserImage src={user} alt="Picture of the author"></UserImage>
              </a>
            </Link>

            <Link href="/alert">
              <a>
                <AlertImage
                  src={alert}
                  alt="Picture of the author"
                ></AlertImage>
              </a>
            </Link>
          </Icons>
        </ContentBox>
      </HeaderBox>
    </>
  );
};

export default Header;

const HeaderBox = styled.div`
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
  color: white;
  font-weight: 900;
  font-size: 32px;
  text-decoration: none;
`;

const Icons = styled.div`
  display: flex;
  width: 100px;
  align-items: center;
  justify-content: space-between;
`;

const UserImage = styled(Image)`
  width: 45px;
  height: 40px;
`;

const AlertImage = styled(Image)`
  width: 35px;
  height: 35px;
`;
