import React, { ChangeEvent, ChangeEventHandler } from 'react';
import { Typography } from 'src/components/Typography';
import { customColor } from 'src/constants';
import styled from 'styled-components';
type Props = {
  setAboutMe: React.Dispatch<React.SetStateAction<string>>;
};
export function TextAreaComponent({ setAboutMe }: Props) {
  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setAboutMe(value);
  };
  return (
    <Container>
        <Typography size="20" fontWeight="bold">
          자기소개
        </Typography>
      <InputWrapper>
        <TextArea
          onChange={onChange}
          placeholder="자기소개를 입력해주세요"
        ></TextArea>
        <Caption>
          <Typography size="12" fontWeight="bold">
            닉네임과 자기소개는 마이페이지에서 이후에 수정가능합니다
          </Typography>
        </Caption>
      </InputWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 800px;
  white-space: nowrap;
`;
const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

const Caption = styled.div`
  position: absolute;
  top: 345px;
  right: 0;
  div {
    right: 0;
  }
`;

const TextArea = styled.textarea`
  border-radius: 10px;
  height: 330px;
  padding: 5px 10px;
  box-sizing: border-box;
  margin-left: 40px;
  font-size: 16px;
  ::placeholder {
    font-weight: bold;
    color: ${customColor.gray};
  }
  :focus {
    outline: none;
  }
  resize: none;
`;
