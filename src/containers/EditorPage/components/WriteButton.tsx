import React from 'react';
import styled from 'styled-components';
import { customColor } from 'src/constants/customColor';
import { Typography } from 'src/components/Typography';

export function WriteButton() {
  return (
    <Container>
      <ButtonWrapper>
        <Typography size="20" fontWeight="bold" color="white">
          글 작성하기
        </Typography>
      </ButtonWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 920px;
  display: flex;
  justify-content: flex-end;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 50px;
  background-color: ${customColor.blue};
  border-radius: 10px;
`;
