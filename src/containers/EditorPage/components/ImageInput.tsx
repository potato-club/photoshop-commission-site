import React, { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form';
import { Typography } from 'src/components/Typography';
import { customColor } from 'src/constants';
import styled from 'styled-components';
type Props = {
  register: UseFormRegister<FieldValues>;
  errors: Partial<FieldErrorsImpl>;
  setImages: React.Dispatch<React.SetStateAction<File[] | undefined>>;
};
export function ImageInput({ register, errors, setImages }: Props) {
  const [fileNames, setFileNames] = useState<string[]>([]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault();
    if (!e.target.files) return;

    const uploadFiles = e.target.files;
    const formData = [];

    const fileNames = [];

    if (uploadFiles!.length > 3) {
      // 이미지 3개이상 선택했을때
      alert('이미지는 최대 3개까지 등록할 수 있습니다.');
      setFileNames([]);
      return;
    }

    if (uploadFiles) {
      for (let i = 0; i < uploadFiles.length; ++i) {
        fileNames.push(uploadFiles[i].name);
        formData.push(uploadFiles[i]);
      }
    }
    setFileNames(fileNames);
    setImages(formData);
  };


  return (
    <Container>
        <Typography size="20" fontWeight="bold">
          의뢰사진
        </Typography>
      <Input
        id="imgUpload"
        type="file"
        accept="image/*"
        onChange={onChange}
        multiple
      />
      <Label htmlFor="imgUpload">
        <Typography size="16" fontWeight="bold" color="blue">
          사진 등록
        </Typography>
      </Label>
      <FileNameWrapper>
        {fileNames.map((data, index) => (
          <Typography size="16" fontWeight="bold" key={index}>
            파일{index + 1} : {data}
          </Typography>
        ))}
      </FileNameWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;  width: 100%;
  max-width: 900px;
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
const FileNameWrapper = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 4px 0;
`;
