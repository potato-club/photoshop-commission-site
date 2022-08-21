import React from 'react';
import { customColor } from 'src/constants/customColor';
import styled from 'styled-components';
import { Typography } from './Typography';

interface IModalBtn {
  handleModal: () => void;
}
const ModalBtn = ({ handleModal }: IModalBtn) => {
  return (
    <Button onClick={handleModal}>
      <Typography color="black" size="16" fontWeight="700">
        요청 확인하기
      </Typography>
    </Button>
  );
};

export default ModalBtn;

const Button = styled.button`
  border: none;
  padding: 10px 15px;
  background-color: ${customColor.gray};
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: ${customColor.danger};
  }
`;
