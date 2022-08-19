import React, { useEffect, useState } from 'react';
import { Typography } from 'src/components/Typography';
import styled from 'styled-components';
import { customColor } from 'src/constants/customColor';
import {
  JobSelectInput,
  NicknameInput,
  TextAreaComponent,
  Title,
} from './components';
import { tokenService } from 'src/utils/useToken';
import { signUpApi } from 'src/apis';

export function SignUpPage() {
  const [nickname, setNickname] = useState('');
  const [selectedJob, setSelectedJob] = useState('USER');
  const [aboutMe, setAboutMe] = useState('');

  const signUp = async () => {
    try {
      console.log('nickname :', nickname);
      console.log('introduction :', aboutMe);
      console.log('userRole :', selectedJob);
      console.log('token : ', tokenService.getToken());

      const data = await signUpApi.signUp({
        nickname,
        introduction: aboutMe,
        userRole: selectedJob,
        token: tokenService.getToken(),
      });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Title />
      <Line />
      <InfoWrapper>
        <NicknameInput setNickname={setNickname} />
        <JobSelectInput
          selectedJob={selectedJob}
          setSelectedJob={setSelectedJob}
        />
        <TextAreaComponent setAboutMe={setAboutMe} />
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 160px;
`;

const Line = styled.div`
  width: 100%;
  max-width: 1178px;
  border-bottom: 1px solid ${customColor.gray};
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  width: 100%;
  max-width: 800px;
  margin-top: 80px;
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
