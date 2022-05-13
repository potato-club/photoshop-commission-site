import React from 'react'
import styled from "styled-components";
import { Typography } from 'src/components/Typography';

export function Title() {
  return (
    <Wrapper>
      <Typography size="24" fontWeight="bold">
        가입하기
      </Typography>
      <Typography size="16" fontWeight="bold" color={'gray'}>
        가입을 위한 정보를 입력해주세요
      </Typography>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  width: 800px;
  gap: 10px;
`;