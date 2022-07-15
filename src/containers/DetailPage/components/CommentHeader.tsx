import React from 'react'
import { Typography } from 'src/components/Typography';
import { customColor } from 'src/constants';
import styled from 'styled-components';
type Props = {
  totalComment : number;
};
export function CommentHeader({ totalComment }:Props) {
  return (
    <Container>
      <Typography size="20" fontWeight="bold">
        댓글
      </Typography>
      <Typography size="16" color="blue">
        ({totalComment})
      </Typography>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0 4px;
  padding-bottom: 12px;
  padding-left: 16px;
`;