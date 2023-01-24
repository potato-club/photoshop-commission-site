import { FaGithub } from 'react-icons/fa';
import { FooterList } from 'src/constants/footer/FooterList';
import { Email } from 'src/constants/footer/FooterEmail';
import { Content } from './index';
import styled from 'styled-components';
import { customColor } from 'src/constants';

export const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <ContentWrapper>
          <ContentBox>
            {FooterList.map((element, index) => (
              <Content
                theme={element.theme}
                content={element.content}
                href={element.href}
                key={index}
              />
            ))}
          </ContentBox>
          <Line />
        </ContentWrapper>
        <EmailBox>
          <EmailWrap>
            <Emails>{Email.email}</Emails>
            <FaGithub />
          </EmailWrap>
        </EmailBox>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  height: 279px;
  background-color: ${customColor.blue}35;
  position: relative;
  width: 100%;
  margin-bottom: 90px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 40px;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1178px;
  list-style: none;
  margin: 0 auto;
`;

const EmailBox = styled.div`
  width: 100%;
  max-width: 1178px;
  position: relative;
  margin: 0 auto;
  color: ${customColor.gray};
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

const Emails = styled.span`
  margin-right: 15px;
  font-size: 12px;
`;

const Line = styled.hr`
  border: 0;
  height: 0.5px;
  background: ${customColor.gray};
`;

const ContentBox = styled.div`
  list-style: none;
  padding: 0;
  display: flex;
  margin-bottom: 40px;
  justify-content: space-evenly;
`;
