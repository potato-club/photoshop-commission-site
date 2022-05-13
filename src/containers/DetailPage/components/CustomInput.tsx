import React, { useState } from 'react'
import { customColor } from 'src/constants';
import styled from 'styled-components';
import { Typography } from "src/components/Typography";

export function CustomInput() {
  const [comment, setComment] = useState<string>();

  const clickWrite = () => {
    alert("입력버튼 클릭\n 값: "+comment);
  }
  return (
    <Container>
      <Input placeholder="작성할 댓글을 입력해주세요..." onChange={(e) => setComment(e.target.value)}/>
      <SubMitButton onClick={() => clickWrite()}>
        <Typography size="16" color="white">
          입력
        </Typography>
      </SubMitButton>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
`;
const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  height: 40px;
  padding: 0 80px 0 16px;
  outline: none;
  border: none;
  border-top: 1px solid ${customColor.gray};
  border-bottom: 1px solid ${customColor.gray};
  font-size: 16px;
  ::placeholder {
    color: ${customColor.gray};
  }
`;

const SubMitButton = styled.div`
  position: absolute;
  width: 60px;
  height: 100%;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${customColor.blue};
`;
