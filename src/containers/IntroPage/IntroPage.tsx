import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { Typography } from 'src/components';
import { customColor } from 'src/constants';

const IntroPage = () => {
  return (
    <Container>
      <HeaderImageBox>
        <Image
          src="/image 92.png"
          width="1180px"
          height="640px"
          alt="이미지가 없습니다.."
        />
      </HeaderImageBox>
      <HeaderTextBox>
        <Typography size="48" fontWeight="900">
          소중한 사진들을 편집하는데
        </Typography>
        <Typography size="48" fontWeight="900">
          어려움을 느끼신다면?
        </Typography>
      </HeaderTextBox>

      <SectionImageBox>
        <ImageBox>
          <Image
            src="/image 43.png"
            width="480px"
            height="640px"
            alt="이미지가 없습니다.."
          />
          <Typography size="24" fontWeight="900">
            Before
          </Typography>
        </ImageBox>
        <ImageBox>
          <Image
            src="/image 44.png"
            width="480px"
            height="640px"
            alt="이미지가 없습니다.."
          />
          <Typography size="24" fontWeight="900">
            After
          </Typography>
        </ImageBox>
      </SectionImageBox>
      <SectionTextBox>
        <Typography size="60" fontWeight="900">
          또는, 고객의 요구사항대로
        </Typography>
        <Typography size="60" fontWeight="900">
          편집하는 역량을 기르고 싶다면?
        </Typography>
      </SectionTextBox>
      <Image
        src="/image 93.png"
        width="1180px"
        height="760px"
        alt="이미지가 없습니다.."
      />

      <FooterTextBox>
        <Typography size="60" fontWeight="900">
          이곳에서 시도해보세요
        </Typography>
        <br />
        <br />
        <Typography size="80" fontWeight="900" color="blue">
          가나다 포토샵
        </Typography>
      </FooterTextBox>
      <BtnBox>
        <LoginBtn>
          <Typography size="16" fontWeight="900" color="lightBlue">
            로그인 및 회원가입
          </Typography>
        </LoginBtn>
        <GoToBtn>
          <Typography size="16" fontWeight="900" color="white">
            게시글 보러가기
          </Typography>
        </GoToBtn>
      </BtnBox>
    </Container>
  );
};

export default IntroPage;

const Btn = styled.button`
  width: 500px;
  height: 50px;
  box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  &:active {
    position: relative;
    top: 2px;
    box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;
const GoToBtn = styled(Btn)`
  background-color: rgba(162, 170, 242, 1);
  border: none;
  margin-bottom: 400px;
`;
const LoginBtn = styled(Btn)`
  border: solid rgba(162, 213, 242, 1);
  border-width: 5px;
  background-color: ${customColor.white};
  margin-bottom: 20px;
`;
const BtnBox = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
`;
const TextBox = styled.div`
  text-align: center;
`;
const FooterTextBox = styled(TextBox)`
  margin: 250px 0;
`;
const SectionTextBox = styled(TextBox)`
  margin: 0 0 250px 0;
`;
const SectionImageBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 250px;
`;
const ImageBox = styled.div``;
const HeaderTextBox = styled(TextBox)`
  margin: 25px 0 250px 0;
`;
const HeaderImageBox = styled.div`
  margin: 40px 0 50px 0;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
