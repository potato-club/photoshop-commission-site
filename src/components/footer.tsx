import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { Content } from '../components';
import * as S from './Footer.style';

export const Footer = () => {
  const [list, setlist] = useState([
    {
      theme: '인트로페이지',
      href: '/',
    },
    {
      theme: 'HOME',
      content: ['의뢰전', '의뢰중', '의뢰완료'],
      href: '/home',
    },
    {
      theme: 'ABOUT',
      content: ['공지사항', '이용약관'],
      href: '/about',
    },
  ]);

  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.ContentWrapper>
            <S.ContentBox>
              {list.map((element, index) => (
                <Content
                  theme={element.theme}
                  content={element.content}
                  href={element.href}
                  key={index}
                />
              ))}
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
