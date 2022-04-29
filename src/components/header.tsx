import Link from 'next/link';
import * as S from './Header.style';
import { Typography } from '../components';

export const Header = () => {
  return (
    <>
      <S.HeaderBox>
        <S.ContentBox>
          <Link href="/" passHref>
            <S.Theme>
              <Typography color="white" size="32" fontWeight="900">
                가나다 포토샵
              </Typography>
            </S.Theme>
          </Link>
          <S.Icons>
            <Link href="/user">
              <a>
                <S.UserImage />
              </a>
            </Link>

            <Link href="/alert">
              <a>
                <S.AlertImage />
              </a>
            </Link>
          </S.Icons>
        </S.ContentBox>
      </S.HeaderBox>
    </>
  );
};

export default Header;
