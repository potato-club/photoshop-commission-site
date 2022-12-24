import React from 'react';
import { customColor } from 'src/constants/customColor';
import styled from 'styled-components';
import useModal from 'src/hooks/useModal';
import { Typography } from 'src/components';
import { OutputModal } from './OutputModal';

export const OutputModalBtn = () => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  return (
    <>
      <Button onClick={handleOpenModal}>
        <Typography color="black" size="16" fontWeight="bold">
          결과물 보기
        </Typography>
      </Button>
      <OutputModal isOpen={isOpen} handleCloseModal={handleCloseModal} />
    </>
  );
};

const Button = styled.button`
  border: none;
  padding: 10px 15px;
  background-color: ${customColor.gray};
  font-size: 16px;
  border-radius: 10px;
  &:hover {
    background-color: ${customColor.danger};
  }
`;
