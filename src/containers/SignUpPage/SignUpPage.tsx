import React, { useEffect, useState } from 'react';
import { Typography } from 'src/components/Typography';
import styled from 'styled-components';
import { customColor } from 'src/constants/customColor';
import { JobSelectRadio, NicknameInput, TextAreaComponent, Title } from './components';

export function SignUpPage() {
  const [job, setJob] = useState('requester');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setJob(value);
  };
  useEffect(() => {
    console.log(job);
  },[job])

  const signUp = () => {
    alert('가입하기 버튼 클릭');
  };
  return (
    <Container>
      <Title />
      <Line />
      <InfoWrapper>
        <NicknameInput />
        <JobSelectRadio job={job} onChange={onChange} />
        <TextAreaComponent />
        <SignUpButton onClick={() => signUp()}>
          <Typography size="20" color="white">
            가입하기
          </Typography>
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

const Line = styled.div`
  width: 1178px;
  border-bottom: 1px solid ${customColor.gray};
  margin-top: 20px;
  margin-bottom: 80px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

const SignUpButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 50px;
  background-color: ${customColor.blue};
  border-radius: 10px;
  align-self: flex-end;
  cursor: pointer;
  :hover {
    transform: scale(1.01);
  }
  :active {
    transform: scale(0.99);
  }
`;
