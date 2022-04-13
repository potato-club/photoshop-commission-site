import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import * as S from './Footer.style';

const Footer = () => {
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.ContentWrapper>
            <S.ContentBox>
              <S.Content>
                <Link href="/" passHref>
                  <S.Page>
                    <S.NewTypography size="20" color="blue" fontWeight="900">
                      인트로페이지
                    </S.NewTypography>
                  </S.Page>
                </Link>
              </S.Content>
              <S.Content>
                <S.ContentUl>
                  <Link href="/" passHref>
                    <S.Page>
                      <S.NewTypography size="20" color="blue" fontWeight="900">
                        HOME
                      </S.NewTypography>
                    </S.Page>
                  </Link>
                  <S.ContentLi>
                    <Link href="/" passHref>
                      <S.A>
                        <S.NewTypography size="12" color="gray">
                          의뢰전
                        </S.NewTypography>
                      </S.A>
                    </Link>
                  </S.ContentLi>
                  <S.ContentLi>
                    <Link href="/" passHref>
                      <S.A>
                        <S.NewTypography size="12" color="gray">
                          의뢰중
                        </S.NewTypography>
                      </S.A>
                    </Link>
                  </S.ContentLi>
                  <S.ContentLi>
                    <Link href="/" passHref>
                      <S.A>
                        <S.NewTypography size="12" color="gray">
                          의뢰완료
                        </S.NewTypography>
                      </S.A>
                    </Link>
                  </S.ContentLi>
                </S.ContentUl>
              </S.Content>
              <S.Content>
                <S.ContentUl>
                  <Link href="/" passHref>
                    <S.Page>
                      <S.NewTypography size="20" color="blue" fontWeight="900">
                        ABOUT
                      </S.NewTypography>
                    </S.Page>
                  </Link>
                  <S.ContentLi>
                    <Link href="/" passHref>
                      <S.A>
                        <S.NewTypography size="12" color="gray">
                          공지사항
                        </S.NewTypography>
                      </S.A>
                    </Link>
                  </S.ContentLi>
                  <S.ContentLi>
                    <Link href="/" passHref>
                      <S.A>
                        <S.NewTypography size="12" color="gray">
                          이용약관
                        </S.NewTypography>
                      </S.A>
                    </Link>
                  </S.ContentLi>
                </S.ContentUl>
              </S.Content>
            </S.ContentBox>
            <S.Line></S.Line>
          </S.ContentWrapper>
          <S.EmailBox>
            <S.EmailWrap>
              <S.Email>이메일 thdwo999@naver.com</S.Email>
              <FaGithub />
            </S.EmailWrap>
          </S.EmailBox>
        </S.Wrapper>
      </S.Container>
    </>
  );
};

export default Footer;
