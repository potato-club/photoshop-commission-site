import React from 'react';
import { useDispatch } from 'react-redux';
import { customColor } from 'src/constants/customColor';
import { openRequestModal } from 'src/redux-toolkit/slice/requestModal';
import styled from 'styled-components';
import RequestModal from './RequestModal';
import { Typography } from './Typography';

export const RequestModalBtn = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Button onClick={() => dispatch(openRequestModal())}>
        <Typography color="white" size="16" fontWeight="700">
          의뢰 신청하기
        </Typography>
      </Button>
      <RequestModal />
    </>
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
