import React, { useEffect } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { Typography } from 'src/components';
import { FieldValues, useForm } from 'react-hook-form';
import { UploadImageInput } from 'src/containers/DetailPage/components/UploadImageInput';
import { customColor } from 'src/constants';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '20px',
    width: 'max-content',
    height: 'max-content',
    padding: '40px 160px',
    overflow: 'hidden',
  },
  overlay: {
    background: '#ffffff80',
  },
};
type Props = {
  isOpen: boolean;
  handleClosetModal: () => void;
};
export const UploadModal = ({ isOpen, handleClosetModal }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <Modal
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={() => handleClosetModal()}
      style={customStyles}
      contentLabel="Upload Modal"
    >
      <Wrapper>
        <Typography size="32" color="blue" fontWeight="bold">
          작업 완료한 작품 업로드
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <UploadImageInput register={register} errors={errors} />
          <ButtonWrapper>
            <Button
              backgroundColor={customColor.white}
              borderColor={customColor.blue}
              onClick={() => {
                handleClosetModal();
              }}
            >
              <Typography size="16" color="blue">
                취소하기
              </Typography>
            </Button>
            <Button backgroundColor={customColor.blue} type="submit">
              <Typography size="16" color="white">
                수정하기
              </Typography>
            </Button>
          </ButtonWrapper>
        </form>
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
  cursor: pointer;
  :hover {
    transform: scale(1.01);
  }
  :active {
    transform: scale(0.99);
  }
  ${({ borderColor }) =>
    borderColor ? `border: 1px solid ${borderColor}` : ''}
`;
