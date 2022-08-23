import React from 'react';
import { customColor } from 'src/constants/customColor';
import styled from 'styled-components';
import { Typography } from './Typography';

interface IModalBtn {
  handleModal: () => void;
}
export const RequestModalBtn = ({ handleModal }: IModalBtn) => {
  return (
    <Button onClick={handleModal}>
      <Typography color="white" size="16" fontWeight="700">
        의뢰 신청하기
      </Typography>
    </Button>
  );
};

export default RequestModalBtn;

const Button = styled.button`
  border: none;
  padding: 15px 20px;
  background-color: ${customColor.lightBlue};
  font-size: 16px;
  width: 180px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${customColor.danger};
  }
`;
