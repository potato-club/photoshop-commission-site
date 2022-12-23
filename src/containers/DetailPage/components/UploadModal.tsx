import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { Typography } from 'src/components';
import { FieldValues, useForm } from 'react-hook-form';
import { customColor } from 'src/constants';
import { ImageInput } from 'src/containers/EditorPage/components';
import { useMutation, useQueryClient } from 'react-query';
import { requestApi } from 'src/apis/request';
import { useRouter } from 'next/router';
import { infoModal } from 'src/utils/interactionModal';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '20px',
    width: '720px',
    height: '360px',
    padding: '40px',
    overflow: 'hidden',
  },
  overlay: {
    background: '#ffffff80',
  },
};
type Props = {
  isOpen: boolean;
  handleCloseModal: () => void;
};
export const UploadModal = ({ isOpen, handleCloseModal }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    (frm: FormData) => requestApi.uploadFile(router.query.id, frm),
    {
      onSuccess: (data) => {
        infoModal('업로드가 완료되었습니다.', 'success');
        queryClient.invalidateQueries('checkOutput');
        handleCloseModal();
        console.log(data);
      },
      onError: error => {
        alert('작업파일 업로드 오류');
        console.log(error);
      },
    },
  );

  const onSubmit = (data: FieldValues) => {
    const { image } = data;
    const frm = new FormData();
    for (let i = 0; i < image.length; ++i) {
      frm.append('image', image[i]);
    }
    mutate(frm);
  };

  return (
    <Modal
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={() => handleCloseModal()}
      style={customStyles}
      contentLabel="Upload Modal"
    >
      <Wrapper>
        <Typography size="32" color="blue" fontWeight="bold">
          작업 완료한 작품 업로드
        </Typography>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <ImageInput register={register} errors={errors} />
          <ButtonWrapper>
            <Button
              backgroundColor={customColor.white}
              borderColor={customColor.blue}
              onClick={handleCloseModal}
              type="button"
            >
              <Typography size="16" color="blue">
                취소하기
              </Typography>
            </Button>
            <Button backgroundColor={customColor.blue} type="submit">
              <Typography size="16" color="white">
                업로드하기
              </Typography>
            </Button>
          </ButtonWrapper>
        </Form>
      </Wrapper>
    </Modal>
  );
};

const Wrapper = styled.div`
  display: flex;
  background-color: white;
  border-radius: 25px;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 60px;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  > :first-child {
    justify-content: center;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0 20px;
  margin-top: 40px;
`;

type ButtonStyle = {
  backgroundColor: string;
  borderColor?: string;
};
const Button = styled.button<ButtonStyle>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 10px;
  align-self: flex-end;
  ${({ borderColor }) =>
    borderColor ? `border: 1px solid ${borderColor}` : ''}
`;
