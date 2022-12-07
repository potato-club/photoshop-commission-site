import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { ImageType } from 'src/types/image.type';
type Props = {
  register: UseFormRegister<FieldValues>;
  imageUrls:ImageType[];
  contents: string;
};
export function Contents({register, imageUrls, contents}:Props) {
  return (
    <Container>
      <ImgContainer>
        {imageUrls &&
          imageUrls.map((data, index) => (
            <Image
              width={630}
              height={470}
              key={index}
              src={data.fileUrl}
              alt="img"
            />
          ))}
      </ImgContainer>
      <TextWrapper>
        <TextArea
          defaultValue={contents}
          placeholder="내용을 입력해주세요"
          {...register('contents')}
        />
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

const TextArea = styled.textarea`
  font-size: 32px;
  padding: 8px;
  width: 100%;
  font-weight: bold;
  height: 400px;
`;
