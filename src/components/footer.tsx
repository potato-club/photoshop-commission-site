import { FaGithub } from 'react-icons/fa';
import { FooterList } from 'src/constants/footer/FooterList';
import { Email } from 'src/constants/footer/FooterEmail';
import { Content } from '../components/index';

import * as S from './Footer.style';

export const Footer = () => {
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.ContentWrapper>
            <S.ContentBox>
              {FooterList.map((element, index) => (
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
              <S.Email>{Email.email}</S.Email>
              <FaGithub />
            </S.EmailWrap>
          </S.EmailBox>
        </S.Wrapper>
      </S.Container>
    </>
  );
};

export default Footer;
