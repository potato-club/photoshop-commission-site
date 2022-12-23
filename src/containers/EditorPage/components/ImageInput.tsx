import Image from 'next/image';
import React, { ChangeEvent, useState } from 'react';
import { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form';
import { CustomErrorMessage } from 'src/components/CustomErrorMessage';
import { Typography } from 'src/components/Typography';
import { customColor } from 'src/constants';
import { errorModal, infoModal } from 'src/utils/interactionModal';
import styled from 'styled-components';
type Props = {
  register: UseFormRegister<FieldValues>;
  errors: Partial<FieldErrorsImpl>;
};
export function ImageInput({ register, errors }: Props) {
  const [thumbnails, setThumbnails] = useState<string[]>([]);
  const { onChange, ...rest } = register('image', {
    required: '사진파일을 첨부해주세요',
    validate: value =>
      value.length > 3 ? '이미지는 최대 3개까지 등록할 수 있습니다.' : true,
  });

  const addImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setThumbnails([]); // 기존 썸네일 초기화

    if (e.target.files!.length > 3) {
      errorModal('이미지는 최대 3개까지 등록할 수 있습니다.');
      return;
    }

    if (e.target.value[0]) {
      for (let i = 0; i < e.target.files!.length; ++i) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(e.target.files![i]);
        fileReader.onload = () => {
          setThumbnails(prev => [...prev, String(fileReader.result)]);
        };
      }
      infoModal('사진파일 등록 완료!', 'success');
    }
  };

  return (
    <Container>
      <Typography size="20" fontWeight="bold">
        의뢰사진
      </Typography>
      <InputWrapper>
        <Input
          id="imgUpload"
          type="file"
          accept="image/*"
          multiple
          {...rest}
          onChange={e => {
            addImage(e);
            onChange(e);
          }}
        />
        <Label htmlFor="imgUpload">
          <Typography size="16" fontWeight="bold" color="blue">
            사진 등록
          </Typography>
        </Label>
        <CustomErrorMessage
          errors={errors}
          name="image"
          leftPosition="30"
          bottomPosition="-24"
        />
      </InputWrapper>

      <ThumbnailContainer>
        {thumbnails.map((data, index) => (
          <ImageWrapper key={index}>
            <Image src={data} width={100} height={100} alt="thumbnail" />
          </ImageWrapper>
        ))}
      </ThumbnailContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 900px;
  height: 100px;
`;

const InputWrapper = styled.div`
  display: flex;
  position: relative;
  width: max-content;
`;

const Input = styled.input`
  display: none;
`;
const Label = styled.label`
  margin-left: 30px;
  border: 1px solid ${customColor.blue};
  padding: 8px 20px;
  border-radius: 10px;
`;
const ThumbnailContainer = styled.div`
  margin-left: 20px;
  display: flex;
  gap: 0 4px;
`;

const ImageWrapper = styled.div`
  border-radius: 24px;
  padding: 8px;
  background-color: ${customColor.lightBlue};
`;
