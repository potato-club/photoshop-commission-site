import React from 'react';
import { customColor } from 'src/constants/customColor';
import styled from 'styled-components';
import { Typography } from './Typography';
import { useDispatch } from "react-redux";
import { openConfirmModal } from 'src/redux-toolkit/slice/confirmModal';
import ConfirmModal from './ConfirmModal';

export const ConfirmModalBtn = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Button onClick={() => dispatch(openConfirmModal())}>
        <Typography color="black" size="16" fontWeight="700">
          요청 확인하기
        </Typography>
      </Button>
      <ConfirmModal />
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
  cursor: pointer;
  &:hover {
    background-color: ${customColor.danger};
  }
`;
