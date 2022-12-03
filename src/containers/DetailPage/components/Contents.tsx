import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from 'src/components/Typography';
import { ImageType } from 'src/types/image.type';
import { imageOpenType } from 'src/types/imageOpen.type';
import styled from 'styled-components';
import { RootState } from "src/redux-toolkit/store";

export function Contents() {
  const detailData = useSelector((state: RootState) => state.detailData.data);
  const {imageUrls, contents, imageOpen} = detailData;
  return (
    <Container>
      {imageOpen === imageOpenType.open && (
        <ImgContainer>
          {imageUrls.map((data, index) => (
            <Image
              width={630}
              height={470}
              key={index}
              src={data.fileUrl}
              alt="img"
            />
          ))}
        </ImgContainer>
      )}
      <TextWrapper>
        <Typography size="16">{contents}</Typography>
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
