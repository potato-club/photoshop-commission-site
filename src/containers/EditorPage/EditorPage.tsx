import React from 'react';
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
import { FieldValues, useForm } from 'react-hook-form';
import { infoModal } from 'src/utils/interactionModal';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';

// const testUrl = 'http://localhost:3000/board/create';

export function EditorPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const { mutate } = useMutation(
    (frm: FieldValues) => boardApi.create(frm),
    {
      onSuccess: () => {
        infoModal('등록이 완료되었습니다.', 'success', '', () => {
          router.push('/main');
        });
      },
      onError: () => {
        alert('글작성 오류');
      },
    },
  );

  const submit = async (data: FieldValues) => {
    const { title, context, imageOpen, image } = data;
    const frm = new FormData();

    frm.append('title', title);
    frm.append('context', context);
    frm.append('imageOpen', imageOpen);

    for (let i = 0; i < image.length; ++i) {
      frm.append('image', image[i]);
    }

    mutate(frm);
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
