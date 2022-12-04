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
import { signUpApi } from 'src/apis';
import { useRouter } from 'next/router';
import { useSessionStorage } from 'src/hooks/useSessionStorage';
import { FieldValues, useForm } from 'react-hook-form';

export function SignUpPage() {
  // Todo 우선 submit 하면 자동으로 중복검사 하게끔하고, 이전방법이 낫겠다 싶으면 닉네임만 제어컴포넌트로 바꿔서 중복확인 버튼 사용하기
  // const [doubleNameCheck, setDoubleNameCheck] = useState<boolean>(false);
  const { setSessionStorage, getSessionStorage, removeSessionStorage } =
    useSessionStorage();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const signUp = async (data: FieldValues) => {
    const { nickname, userRole, introduction } = data;
    console.log(data)
    try {
      // * 닉네임 중복확인 완료
      // * introduction 빈값 체크 완료

      const { data } = await signUpApi.signUp({
        nickname,
        userRole,
        introduction,
        serialCode: getSessionStorage('serialCode'),
      });
      removeSessionStorage('serialCode');
      setSessionStorage('session', data.session);
      router.push('/main');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Title />
      <Line />
      <Form onSubmit={handleSubmit(signUp)}>
        <NicknameInput register={register} errors={errors}/>
        <JobSelectInput control={control} errors={errors}/>
        <TextAreaComponent register={register} errors={errors}/>
        <SignUpButton type="submit">
          <Typography size="20" color="white">
            가입하기
          </Typography>
        </SignUpButton>
      </Form>
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 80px;
  width: 100%;
  max-width: 800px;
  margin-top: 80px;
`;

const SignUpButton = styled.button`
  display: flex;
  justify-content: center;
  border: none;
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
