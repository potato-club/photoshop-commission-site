import React from 'react'
import { Typography } from 'src/components/Typography';
import { customColor } from 'src/constants';
import styled from 'styled-components';

export function Header() {
  return (
    <Container>
      <Typography size="12" color="gray">
        {`<< 홈 < 의뢰중 게시글`}
      </Typography>
      <SpaceBetween>
        <Typography size="32" color="black" fontWeight="bold">
          부자처럼 나오게 해주세요
        </Typography>
        <WriterWrapper>
          <Typography size="16" color="black">
            양파먹는소녀
          </Typography>
          <Typography size="12" color="black">
            2022-03-18
          </Typography>
        </WriterWrapper>
      </SpaceBetween>
      <SpaceBetween>
        <Typography size="20" color="purple">
          의뢰중
        </Typography>
        <Typography size="12" color="gray">
          신고하기
        </Typography>
      </SpaceBetween>
    </Container>
  );
}


const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  padding: 0 16px 24px 16px;
  > div:first-child {
    margin-top: 40px;
  }
  border-bottom: 1px solid ${customColor.gray};
`;

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const WriterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px 0;
`;
