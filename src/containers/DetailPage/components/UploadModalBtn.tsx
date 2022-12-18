import React from 'react';
import { customColor } from 'src/constants/customColor';
import styled from 'styled-components';
import useModal from 'src/hooks/useModal';
import { Typography } from 'src/components';
import { UploadModal } from './UploadModal';

export const UploadModalBtn = () => {
  const { isOpen, handleOpenModal, handleClosetModal } = useModal();
  return (
    <>
      <Button onClick={() => handleOpenModal()}>
        <Typography color="black" size="16" fontWeight="bold">
          작업파일 업로드
        </Typography>
        <UploadModal isOpen={isOpen} handleClosetModal={handleClosetModal}/>
      </Button>
    </>
  );
};

const Button = styled.button`
  border: none;
  padding: 10px 15px;
  background-color: ${customColor.gray};
  font-size: 16px;
  width: 135px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${customColor.danger};
  }
`;
