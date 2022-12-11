import React from 'react';
import styled from 'styled-components';
import { customColor } from 'src/constants';
import { Typography } from 'src/components';
import { useRouter } from 'next/router';

export const Buttons = () => {
  const router = useRouter();

  return (
    <Wrapper>
      <Button
        backgroundColor={customColor.white}
        borderColor={customColor.blue}
        onClick={() => router.back()}
      >
        <Typography size="20" color="blue">
          취소하기
        </Typography>
      </Button>
      <Button backgroundColor={customColor.blue} type="submit">
        <Typography size="20" color="white">
          수정하기
        </Typography>
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0 20px;
`;

type ButtonStyle = {
  backgroundColor: string;
  borderColor?: string;
};
const Button = styled.button<ButtonStyle>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 50px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 10px;
  align-self: flex-end;
  cursor: pointer;
  :hover {
    transform: scale(1.01);
  }
  :active {
    transform: scale(0.99);
  }
  ${({ borderColor }) =>
    borderColor ? `border: 1px solid ${borderColor}` : ''}
`;
