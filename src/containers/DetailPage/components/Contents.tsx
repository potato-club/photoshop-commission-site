import Image from 'next/image';
import React from 'react';
import { Typography } from 'src/components/Typography';
import styled from 'styled-components';
type Props = {
  Text : string;
}
export function Contents({ Text } : Props) {
  return (
    <Container>
      <ImgWrapper>
        <Image width={630} height={470} src="/schedule.jpeg" alt="img" />
      </ImgWrapper>
      <TextWrapper>
        <Typography size="16">{Text}</Typography>
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
  margin: 80px 40px 0px 40px;
`;
