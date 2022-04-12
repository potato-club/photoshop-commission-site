import Image from 'next/image';
import Link from 'next/link';
import github from '../assets/image/github.png';
import styled from 'styled-components';


const Footer = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <ContentWrapper>
            <ContentBox>
              <Content>
                <Link href="/" passHref>
                  <Page>인트로페이지</Page>
                </Link>
              </Content>
              <Content>
                <ContentUl>
                  <Link href="/" passHref>
                    <Page>HOME</Page>
                  </Link>
                  <ContentLi>
                    <Link href="/" passHref>
                      <A>의뢰전</A>
                    </Link>
                  </ContentLi>
                  <ContentLi>
                    <Link href="/" passHref>
                      <A>의뢰중</A>
                    </Link>
                  </ContentLi>
                  <ContentLi>
                    <Link href="/" passHref>
                      <A>의뢰완료</A>
                    </Link>
                  </ContentLi>
                </ContentUl>
              </Content>
              <Content>
                <ContentUl>
                  <Link href="/" passHref>
                    <Page>ABOUT</Page>
                  </Link>
                  <ContentLi>
                    <Link href="/" passHref>
                      <A>공지사항</A>
                    </Link>
                  </ContentLi>
                  <ContentLi>
                    <Link href="/" passHref>
                      <A>이용약관</A>
                    </Link>
                  </ContentLi>
                </ContentUl>
              </Content>
            </ContentBox>
            <Line></Line>
          </ContentWrapper>
          <EmailBox>
            <EmailWrap>
              <Email>이메일 thdwo999@naver.com</Email>
              <Image src={github} alt="nothing" className="github"></Image>
            </EmailWrap>
          </EmailBox>
        </Wrapper>
      </Container>

      <style jsx>{`
        .contentBox > ul > li:nth-child(2) {
          margin: 0 220px;
        }
        .page {
        }
        .page ~ li {
        }
      `}</style>
    </>
  );
};

export default Footer;

const Container = styled.div`
  height: 279px;
  background-color: rgba(7, 104, 159, 0.14);
  position: relative;
  width: 100vw;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 40px;
`;

const ContentWrapper = styled.div`
  width: 1178px;
  list-style: none;
  margin: 0 auto;
`;

const ContentBox = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  justify-content: space-evenly
`;

const Page = styled.a`
  color: rgba(7, 104, 159, 1);
  font-size: 20px;
  font-weight: 900;
  display: inline-block;
  margin-bottom: 9px;
  text-decoration: none;
`;

const EmailBox = styled.div`
  width: 1178px;
  position: relative;
  margin: 0 auto;
  color: rgba(173, 173, 173, 1);
  font-size: 12px;
  height: 30px;
`;

const EmailWrap = styled.div`
  position: absolute;
  right: 0px;
  top: 22px;
  display: flex;
  align-items: center;
`;

const A = styled.a`
  text-decoration: none;
  color: rgba(173, 173, 173, 1);
  font-size: 12px;
  padding: 7px 0 7px 0;
  :hover {
    font-weight: 900;
  }
`;

const Email = styled.span`
  margin-right: 15px;
`;

const Line = styled.hr`
  border: 0;
  height: 0.5px;
  background: rgba(173, 173, 173, 1);
`;

const Content = styled.li``;
const ContentUl = styled.ul``;
const ContentLi = styled.li``;
