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
      <TitleWrapper>
        <Typography size="20" fontWeight="bold">
          글 제목
        </Typography>
      </TitleWrapper>
      <Input placeholder="제목을 입력해주세요" onChange={onChange} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 900px;
  white-space: nowrap;
`;

const TitleWrapper = styled.div`
  display: flex;
  min-width: 100px;
  justify-content: flex-end;
`;
const Input = styled.input`
  margin-left: 20px;
  border: none;
  outline: none;
  border-bottom: 1px solid ${customColor.black};
  width: 100%;
  max-width: 800px;
  font-size: 16px;
  padding: 2px 10px;
  font-weight: bold;
  ::placeholder {
    color: ${customColor.gray};
  }
`;
