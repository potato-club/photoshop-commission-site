import React from 'react';
import { Typography } from 'src/components/Typography';
import { customColor } from 'src/constants';
import styled from 'styled-components';

export function PictureInput() {
  return (
    <Container>
      <Typography size="20" fontWeight="bold">
        의뢰할 사진을 등록
      </Typography>
      <Input
        id="imgUpload"
        type="file"
        accept="image/jpg, image/png, image/jpeg"
      />
      <Label htmlFor='imgUpload'>
        <Typography size="16" fontWeight="bold" color="blue">
          사진 등록
        </Typography>
      </Label>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 1130px;
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
