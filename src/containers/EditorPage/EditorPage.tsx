import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Typography } from 'src/components/Typography';
import {
  TitleInput,
  ImageInput,
  RequestTextArea,
  WriteButton,
  SecretSelectInput,
} from './components';
import { boardApi } from '../../apis/board';
import { useCookies } from 'src/hooks/useCookies';
import { useSessionStorage } from 'src/hooks/useSessionStorage';
import { FieldValues, useForm } from 'react-hook-form';

// const testUrl = 'http://localhost:3000/board/create';

export function EditorPage() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const { getCookie } = useCookies();
  const { getSessionStorage } = useSessionStorage();

  const submit = async (data: FieldValues) => {
    const {title, context, imageOpen, image} = data;
    console.log(data);
    try {
      const frm = new FormData();

      frm.append('title', title);
      frm.append('context', context);
      frm.append('imageOpen', imageOpen);

      for(let i = 0; i < image.length; ++i) {
        frm.append('image', image[i]);
      }

      const data = await boardApi.create(
        frm,
        getSessionStorage('access'),
        getCookie('refresh'),
      );
      console.log(data);


      alert('등록완료');
    } catch (error) {
      console.log(error);
    }
  };

  

  return (
    <Container>
      <Title>
        <Typography size="40" color={'blue'} fontWeight="bold">
          글 작성
        </Typography>
      </Title>
      <InputContainer onSubmit={handleSubmit(submit)}>
        <TitleInput register={register} errors={errors} />
        <ImageInput register={register} errors={errors} />
        <SecretSelectInput control={control} errors={errors} />
        <RequestTextArea register={register} errors={errors} />
        <WriteButton />
      </InputContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 160px;
`;
const Title = styled.div`
  display: flex;
  width: 100%;
  max-width: 900px;
  justify-content: center;
  margin: 100px 0;
`;

const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 80px 0;
`;
