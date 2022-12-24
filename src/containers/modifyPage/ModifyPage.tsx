import React from 'react';
import styled from 'styled-components';
import { customColor } from 'src/constants';
import { FieldValues, useForm } from 'react-hook-form';
import { Header, Contents, Buttons } from './components';
import { ImageType } from 'src/types/image.type';
import { boardApi } from 'src/apis/board';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { infoModal } from 'src/utils/interactionModal';

type Props = {
  title: string;
  imageUrls: ImageType[];
  contents: string;
};
export const ModifyPage = ({ title, imageUrls, contents }: Props) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const { mutate } = useMutation(
    (frm: FieldValues) =>
      boardApi.update(router.query.id, frm),
    {
      onSuccess: () => {
        infoModal('수정이 완료되었습니다.', 'success', '', () => {
          router.push('/main');
        });
      },
      onError: () => {
        alert('글수정 오류');
      },
    },
  );

  const submit = async (data: FieldValues) => {
    const { title, contents, imageOpen } = data;
    const frm = new FormData();
    frm.append('title', title);
    frm.append('context', contents);
    frm.append('imageOpen', imageOpen);
    mutate(frm);
  };
  
  return (
    <Container>
      <Wrapper>
        <form onSubmit={handleSubmit(submit)}>
          <Header
            register={register}
            control={control}
            errors={errors}
            title={title}
          />
          <Contents
            imageUrls={imageUrls}
            register={register}
            contents={contents}
          />
          <Line />
          <Buttons />
        </form>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1178px;
  display: flex;
  flex-direction: column;
  padding-bottom: 400px;
`;

const Line = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid ${customColor.gray};
`;
