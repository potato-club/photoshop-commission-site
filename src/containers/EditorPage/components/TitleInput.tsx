import React, { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { Typography } from 'src/components/Typography';
import { customColor } from 'src/constants';
import styled from 'styled-components';
type Props = {
  setTitle: Dispatch<SetStateAction<string>>;
};
export function TitleInput({ setTitle }:Props) {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  return (
    <Container>
      <Typography size="20" fontWeight="bold">
        글 제목
      </Typography>
      <Input placeholder="제목을 입력해주세요" onChange={onChange}/>
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