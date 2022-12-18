import React, { useState, ChangeEvent, useRef } from 'react';
import Image from 'next/image';
import { GoPlusSmall } from 'react-icons/go';
import { ErrorMessage } from '@hookform/error-message';
import { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form';
import { infoModal } from 'src/utils/interactionModal';
import { Typography } from 'src/components';
import styled from 'styled-components';
import { customColor } from 'src/constants';
import { CustomErrorMessage } from 'src/components/CustomErrorMessage';
type Props = {
  register: UseFormRegister<FieldValues>;
  errors: Partial<FieldErrorsImpl>;
};
export const UploadImageInput = ({ register, errors }: Props) => {
  const { ref, onChange, ...rest } = register('image', {
    required: '이미지를 선택해주세요',
  });
  const clothesInputRef = useRef<HTMLInputElement | null>(null);

  const [thumbnail, setThumbnail] = useState<string>('');

  const addImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setThumbnail(''); // 취소 된 경우 썸네일 삭제로직

    if (e.target.value[0]) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(e.target.files![0]);
      fileReader.onload = () => {
        setThumbnail(String(fileReader.result!));
      };
      infoModal('사진 등록완료!', 'success');
    }
  };

  return (
    <>
      <InputButton
        id="clothesImage"
        type="file"
        accept="image/*"
        onChange={e => {
          addImage(e);
          onChange(e);
        }}
        {...rest}
        ref={e => {
          ref(e);
          clothesInputRef.current = e;
        }}
      />
      <ImageWrapper>
        {thumbnail ? (
          <Image
            width={400}
            height={350}
            src={thumbnail}
            alt="clothes"
            onClick={() =>
              clothesInputRef.current && clothesInputRef.current.click()
            }
          />
        ) : (
          <InitialImage
            opacity={0.5}
            onClick={() =>
              clothesInputRef.current && clothesInputRef.current.click()
            }
          />
        )}
        <CustomErrorMessage
          errors={errors}
          name="image"
          rightPosition="0"
          bottomPosition="-24"
        />
      </ImageWrapper>
    </>
  );
};

const InputButton = styled.input`
  display: none;
`;

const InitialImage = styled(GoPlusSmall)`
  width: 400px;
  height: 350px;
  background-color: ${customColor.gray};
  border-radius: 40px;
`;

const ImageWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
`;
