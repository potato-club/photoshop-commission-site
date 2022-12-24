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
import { useCookies } from 'src/hooks/useCookies';
import { infoModal } from 'src/utils/interactionModal';

export function SignUpPage() {
  const { setSessionStorage, getSessionStorage, removeSessionStorage } =
    useSessionStorage();
  const { setCookie } = useCookies();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const signUp = async (data: FieldValues) => {
    const { nickname, userRole, introduction } = data;
    try {
      // * 닉네임 중복확인 완료
      // * introduction 빈값 체크 완료

      const { data, headers } = await signUpApi.signUp({
        nickname,
        userRole,
        introduction,
        serialCode: getSessionStorage('serialCode'),
      });
      removeSessionStorage('serialCode');
      setSessionStorage('access', headers.authorization);
      setCookie('refresh', headers.refreshtoken);
      setSessionStorage('nickname', data.nickname[0]);
      setSessionStorage('job', data.userRole[0]);
      infoModal('회원가입이 완료되었습니다', 'success')
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
        <NicknameInput register={register} errors={errors} />
        <JobSelectInput control={control} errors={errors} />
        <TextAreaComponent register={register} errors={errors} />
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
  align-items: center;
  width: 140px;
  height: 50px;
  background-color: ${customColor.blue};
  border-radius: 10px;
  align-self: flex-end;
`;
