import React from 'react';
import styled from 'styled-components';
import { Typography } from 'src/components/Typography';
import { customColor } from 'src/constants';
type Props = {
  setNickname: React.Dispatch<React.SetStateAction<string>>;
};
export function NicknameInput({ setNickname }: Props) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNickname(value);
  };
  return (
    <Container>
      <Typography size="20" fontWeight="bold">
        닉네임
      </Typography>
      <InputWrapper>
        <Input onChange={onChange} placeholder="닉네임을 입력해주세요"></Input>
        <Caption>
          <Typography size="12" fontWeight="bold">
            최대 n글자
          </Typography>
        </Caption>
      </InputWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Input = styled.input`
  border-radius: 10px;
  border: 1px solid ${customColor.black};
  padding: 0 10px;
  width: 280px;
  height: 30px;
  font-size: 16px;
  margin-left: 50px;
  :focus {
    outline: none;
  }
  ::placeholder {
    font-weight: bold;
    color: ${customColor.gray};
  }
`;

const Caption = styled.div`
  position: absolute;
  top: 35px;
  right: 0;
`;
