import React, { useState } from 'react';
import { customColor } from 'src/constants';
import styled, { css } from 'styled-components';
import { Typography } from './Typography';

type Props = {
  message: string;
  onYes: () => void;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};
/**
 * 
 * @param message 모달창에 나올 메세지 : string;
 * @param onYes 확인버튼 눌렀을때 메소드 : () => void;
 * @param setModal 모달창 조건부렌더링 : React.Dispatch<React.SetStateAction<boolean>>;
 * 
 */
export function CustomModal({ message, onYes, setModal }: Props) {
  const onClick = () => {
    onYes();
    setModal(false);
  }
  return (
    <Container>
      <Wrapper>
        <Typography size="16" fontWeight="bold">
          {message}
        </Typography>
        <ButtonWrapper>
          <YesButton onClick={onClick}>
            <Typography size="16">예</Typography>
          </YesButton>
          <NoButton onClick={() => setModal(false)}>
            <Typography size="16">아니오</Typography>
          </NoButton>
        </ButtonWrapper>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${customColor.black}80;
`;
const Wrapper = styled.div`
  position: absolute;
  background-color: ${customColor.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 50%;
  left: 50%;
  width: 100%;
  max-width: 400px;
  min-height: 200px;
  transform: translate(-50%, -50%);
  padding: 40px;
  border-radius: 24px;
  gap: 20px 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 0 20px;
  justify-content: flex-end;
`;

const buttonCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 12px;
  cursor: pointer;
`;

const YesButton = styled.div`
  border: 1px solid ${customColor.blue};
  ${buttonCss};
  padding: 12px 20px;
`;

const NoButton = styled.div`
  border: 1px solid ${customColor.danger};
  ${buttonCss};
  padding: 12px 20px;
`;
