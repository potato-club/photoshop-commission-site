import React from 'react';
import styled from 'styled-components';
import { customColor } from 'src/constants/customColor';
import { Typography } from 'src/components/Typography';

export function WriteButton() {
  return (
    <Container>
      <ButtonWrapper type="submit">
        <Typography size="20" fontWeight="bold" color="white">
          글 작성하기
        </Typography>
      </ButtonWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  justify-content: flex-end;
`;

const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 50px;
  background-color: ${customColor.blue};
  border-radius: 10px;
  cursor: pointer;
  :hover {
    transform: scale(0.99);
  }
  :active {
    transform: scale(1.01);
  }
`;
