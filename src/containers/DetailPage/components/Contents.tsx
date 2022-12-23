import Image from 'next/image';
import React from 'react';
import { Typography } from 'src/components/Typography';
import { ImageType } from 'src/types/image.type';
import { imageOpenType } from 'src/types/imageOpen.type';
import { fileDownload } from 'src/utils/filedown';
import { checkModal } from 'src/utils/interactionModal';
import styled from 'styled-components';
type Props = {
  imageOpen: imageOpenType;
  imageUrls: ImageType[];
  contents: string;
}
export function Contents({imageOpen, imageUrls, contents}:Props) {
  const checkDownload = (filename: string) => {
    checkModal('원본사진을 다운하시겠습니까?', () => fileDownload(filename), undefined, undefined, '게시글의 사진과 크기차이가 있을 수 있습니다');
  }
  return (
    <Container>
      {imageUrls && (
        <ImgContainer>
          {imageUrls.map((data, index) => (
            <Image
              onClick={() => checkDownload(data.fileName)}
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
