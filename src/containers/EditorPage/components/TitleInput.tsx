import React from 'react'
import { Typography } from 'src/components/Typography';
import { customColor } from 'src/constants';
import styled from 'styled-components';

export function TitleInput() {
  return (
    <Container>
        <Typography size="20" fontWeight="bold">
          글 제목
        </Typography>
      <Input placeholder="제목을 입력해주세요" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;
const Input = styled.input`
  margin-left: 30px;
  border: none;
  outline: none;
  border-bottom: 1px solid ${customColor.black};
  width: 800px;
  font-size: 16px;
  padding: 2px 10px;
  font-weight: bold;
  ::placeholder {
    color: ${customColor.gray};
  }
`;
