import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from 'src/components/Typography';
import styled from 'styled-components';
import { RootState } from "src/redux-toolkit/store";
import { FieldValues, UseFormRegister } from 'react-hook-form';
type Props = {
  register: UseFormRegister<FieldValues>;
};
export function Contents({register}:Props) {
  const detailData = useSelector((state: RootState) => state.detailData.data);
  const {imageUrls, contents} = detailData;
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
