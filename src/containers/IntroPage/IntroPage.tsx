import Image from 'next/image';
import styled from 'styled-components';
import { Typography } from 'src/components';
import { customColor } from 'src/constants';
import Link from 'next/link';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useKaKaoLogin } from 'src/hooks/useKaKaoLogin';

const IntroPage = () => {
  const { login } = useKaKaoLogin();
  useEffect(() => {
    AOS.init();
  });
  return (
    <Container>
      <HeaderImageBox data-aos="fade-left" data-aos-duration="1000">
        <Image
          src="/image92.png"
          width="1180px"
          height="640px"
          alt="이미지가 없습니다.."
          priority={true}
        />
      </HeaderImageBox>
      <HeaderTextBox
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-offset="300"
      >
        <Typography size="48" fontWeight="bold">
          소중한 사진들을 편집하는데
        </Typography>
        <Typography size="48" fontWeight="bold">
          어려움을 느끼신다면?
        </Typography>
      </HeaderTextBox>

      <SectionImageBox>
        <ImageBox
          data-aos="zoom-out-right"
          data-aos-duration="1000"
          data-aos-offset="500"
        >
          <Image
            src="/image43.png"
            width="480px"
            height="640px"
            alt="이미지가 없습니다.."
          />
          <Typography size="24" fontWeight="bold">
            Before
          </Typography>
        </ImageBox>
        <ImageBox
          data-aos="zoom-out-left"
          data-aos-duration="1000"
          data-aos-offset="500"
        >
          <Image
            src="/image44.png"
            width="480px"
            height="640px"
            alt="이미지가 없습니다.."
          />
          <Typography size="24" fontWeight="bold">
            After
          </Typography>
        </ImageBox>
      </SectionImageBox>
      <SectionTextBox
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-offset="300"
      >
        <Typography size="60" fontWeight="bold">
          또는, 고객의 요구사항대로
        </Typography>
        <Typography size="60" fontWeight="bold">
          편집하는 역량을 기르고 싶다면?
        </Typography>
      </SectionTextBox>
      <FooterImageBox
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-offset="400"
      >
        <Image
          src="/image93.png"
          width="1180px"
          height="760px"
          alt="이미지가 없습니다.."
        />
      </FooterImageBox>

      <FooterTextBox
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-offset="300"
      >
        <Typography size="60" fontWeight="bold">
          이곳에서 시도해보세요
        </Typography>
        <br />
        <br />
        <Typography size="80" fontWeight="bold" color="blue">
          이지 포토
        </Typography>
      </FooterTextBox>
      <BtnBox>
        <LoginBtn onClick={login}>
          <Typography size="16" fontWeight="bold" color="lightBlue">
            로그인 및 회원가입
          </Typography>
        </LoginBtn>
        <Link href="/main">
          <a>
            <GoToBtn>
              <Typography size="16" fontWeight="bold" color="white">
                게시글 보러가기
              </Typography>
            </GoToBtn>
          </a>
        </Link>
      </BtnBox>
    </Container>
  );
};

export default IntroPage;

const Container = styled.div`
  width: 100%;
  display: flex;
  max-width: 1178px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
`;

const Btn = styled.button`
  width: 500px;
  height: 50px;
  box-shadow: 2px 4px 4px 0px ${customColor.black}25;
  border-radius: 25px;
  &:active {
    position: relative;
    top: 2px;
    box-shadow: 2px 2px 4px 0px ${customColor.black}25;
  }
`;
const GoToBtn = styled(Btn)`
  background-color: ${customColor.purple};
  border: none;
  margin-bottom: 400px;
`;
const LoginBtn = styled(Btn)`
  border: solid ${customColor.lightBlue};
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
const FooterImageBox = styled.div`
  width: 100%;
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
