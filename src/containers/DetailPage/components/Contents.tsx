import Image from 'next/image';
import React from 'react';
import { Typography } from 'src/components/Typography';
import styled from 'styled-components';

export function Contents() {
  return (
    <Container>
      <ImgWrapper>
        <Image width={630} height={470} src="/schedule.jpeg" alt="img" />
      </ImgWrapper>
      <TextWrapper>
        <Typography size="16">
          공강이 하나밖에 없다니.. 편집으로라도 행복해지고 싶습니다
          <br />
          공강 3일 있는것처럼 바꿔주세요!!!!!!!
          <br />
          아니 그나저나 5월6일이 개교기념일 이였다니 나만 몰랐던건가
          ㅋㅋㅋㅋㅋㅋㅋ
          <br />
        </Typography>
      </TextWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 200px;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled.div`
  margin-left: 40px;
  margin-top: 80px;
`;
