import Image from 'next/image';
import React from 'react';
import { Typography } from 'src/components/Typography';
import styled from 'styled-components';
type Props = {
  imageUrls: string[];
  text: string;
  secret: 'secret' | 'noSecret';
};
export function Contents({ text, imageUrls, secret } : Props) {
  return (
    <Container>
      {secret === 'noSecret' && <ImgContainer>
        {imageUrls.map((data, index) => (
          <Image width={630} height={470} key={index} src={data} alt="img" />
        ))}
      </ImgContainer>}
      <TextWrapper>
        <Typography size="16">{text}</Typography>
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

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px 0;
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled.div`
  margin: 80px 40px 0px 40px;
`;
