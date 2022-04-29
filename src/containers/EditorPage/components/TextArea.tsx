import React, { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react';
import { Typography } from 'src/components/Typography';
import { customColor } from 'src/constants';
import styled from 'styled-components';
type Props = {
  setRequest: Dispatch<SetStateAction<string>>;
}
export function TextArea({ setRequest }:Props) {
  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setRequest(e.target.value);
  };
  return (
    <Container>
      <TextWrapper>
        <Typography size="20" fontWeight="bold">
          의뢰 내용
        </Typography>
      </TextWrapper>
      <Input placeholder="제목을 입력해주세요" onChange={onChange} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;
const TextWrapper = styled.div`
  margin-left: -20px;
`;
const Input = styled.textarea`
  margin-left: 30px;
  border-radius: 10px;
  outline: none;
  border-bottom: 1px solid ${customColor.black};
  width: 780px;
  height: 600px;
  font-size: 16px;
  padding: 20px;
  margin-top: -20px;
  font-weight: bold;
  resize: none;
  ::placeholder {
    color: ${customColor.gray};
  }
`;
