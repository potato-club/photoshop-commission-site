import React from 'react';
import { customColor } from 'src/constants/customColor';
import styled from 'styled-components';
import { Typography } from './Typography';
import ConfirmModal from './ConfirmModal';
import useModal from 'src/hooks/useModal';

export const ConfirmModalBtn = () => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  return (
    <>
      <Button onClick={() => handleOpenModal()}>
        <Typography color="black" size="16" fontWeight="700">
          요청 확인하기
        </Typography>
      </Button>
      <ConfirmModal isOpen={isOpen} handleCloseModal={handleCloseModal} />
    </>
  );
};

export default ConfirmModalBtn;

const Button = styled.button`
  border: none;
  padding: 10px 15px;
  background-color: ${customColor.gray};
  font-size: 16px;
  width: 135px;
  border-radius: 10px;
  &:hover {
    background-color: ${customColor.danger};
  }
`;
