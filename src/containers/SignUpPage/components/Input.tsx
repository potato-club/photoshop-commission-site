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

  const checkDuplication = () => {
    alert("중복확인 버튼 클릭");
  };
  return (
    <Container>
      <LeftMargin>
        <Typography size="20" fontWeight="bold">
          닉네임
        </Typography>
      </LeftMargin>
      <Wrapper>
        <InputWrapper>
          <div style={{position: 'relative'}}>
            <Input onChange={onChange} placeholder="닉네임을 입력해주세요" />
            <Caption>
              <Typography size="12" fontWeight="bold">
                최대 8글자
              </Typography>
            </Caption>
          </div>
          <CheckButton onClick={() => checkDuplication()}>
            <Typography size="12" fontWeight="bold" color="blue">
              중복확인
            </Typography>
          </CheckButton>
        </InputWrapper>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 800px;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const CheckButton = styled.button`
  display: flex;
  border: 1px solid ${customColor.blue};
  background-color: white;
  cursor: pointer;
  padding: 8px 20px;
  border-radius: 10px;
`;

const Wrapper = styled.div`
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

const LeftMargin = styled.div`
  margin-left: 12px;
`;
