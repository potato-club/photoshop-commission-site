import React from 'react';
import { Typography } from 'src/components/Typography';
import styled from 'styled-components';
import { customColor } from 'src/constants/customColor';

export function SignUpPage() {
  return (
    <Container>
      <TitleWrapper>
        <Typography size="24" fontWeight="bold">
          가입하기
        </Typography>
        <Typography size="16" fontWeight="bold" color={'gray'}>
          가입을 위한 정보를 입력해주세요
        </Typography>
      </TitleWrapper>
      <Line />
      <InfoWrapper>
        <InputContainer>
          <Typography size="20" fontWeight="bold">
            닉네임
          </Typography>
          <InputWrapper>
            <Input placeholder="닉네임을 입력해주세요"></Input>
            <Caption type="Input">
              <Typography size="12" fontWeight="bold">
                최대 n글자
              </Typography>
            </Caption>
          </InputWrapper>
        </InputContainer>
        <InputContainer>
          <TextAlign marginLeft={10}>
            <Typography size="20" fontWeight="bold">
              직업
            </Typography>
          </TextAlign>
          <Label htmlFor="requester">
            <Typography size="16" fontWeight="bold">
              의뢰자
            </Typography>
          </Label>
          <RadioButton
            type="radio"
            name="job"
            id="requester"
            value="requester"
          />
          <Label htmlFor="designer">
            <Typography size="16" fontWeight="bold">
              디자이너
            </Typography>
          </Label>
          <RadioButton type="radio" name="job" id="designer" value="designer" />
        </InputContainer>
        <InputContainer>
          <TextAlign marginLeft={-10} style={{ alignSelf: 'flex-start' }}>
            <Typography size="20" fontWeight="bold">
              자기소개
            </Typography>
          </TextAlign>
          <InputWrapper>
            <TextArea placeholder="자기소개를 입력해주세요"></TextArea>
            <Caption type="TextArea">
              <Typography size="12" fontWeight="bold">
                닉네임과 자기소개는 마이페이지에서 이후에 수정가능합니다
              </Typography>
            </Caption>
          </InputWrapper>
        </InputContainer>
        <SignUpButton>
          <Typography size='20' color='white'>가입하기</Typography>
        </SignUpButton>
      </InfoWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  width: 1000px;
  gap: 10px;
`;

const Line = styled.div`
  width: 1178px;
  border-bottom: 1px solid ${customColor.gray};
  margin-top: 10px;
  margin-bottom: 80px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;
const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

type CaptionProps = {
  type: string;
};
const Caption = styled.div<CaptionProps>`
  position: absolute;
  top: ${({ type }) => (type === 'Input' ? '35px' : '345px')};
  right: 0;
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
    font-size: 16px;
    color: ${customColor.gray};
  }
`;

const RadioButton = styled.input`
  border-radius: 50%;
  cursor: pointer;
  width: 20px;
  height: 20px;
`;

const Label = styled.label`
  margin-left: 65px;
`;

const TextArea = styled.textarea`
  border-radius: 10px;
  width: 600px;
  height: 330px;
  padding: 5px 10px;
  margin-left: 40px;
  font-size: 16px;
  ::placeholder {
    font-weight: bold;
    font-size: 16px;
    color: ${customColor.gray};
  }
  :focus {
    outline: none;
  }
`;

type TextAlignProps = {
  marginLeft: number;
};
const TextAlign = styled.div<TextAlignProps>`
  margin-left: ${({ marginLeft }) => marginLeft + 'px'};
`;

const SignUpButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:140px;
  height: 50px;
  background-color: ${customColor.blue};
  border-radius: 10px;
  align-self: flex-end;
  cursor: pointer;
  :hover {
    transform: scale(1.05);
  }
  :active {
    transform: scale(0.95);
  }
`;
