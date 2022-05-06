import { FaGithub } from 'react-icons/fa';
import { dummyFooter } from 'src/dummy/dummyFooter';
import { Content } from '../components/index';
import * as S from './Footer.style';

export const Footer = () => {

  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.ContentWrapper>
            <S.ContentBox>
              {dummyFooter.map((element, index) => (
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
