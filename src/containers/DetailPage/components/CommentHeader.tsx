import React from 'react'
import { Typography } from 'src/components/Typography';
import { customColor } from 'src/constants';
import styled from 'styled-components';

export function CommentHeader() {
  return (
    <Container>
      <Typography size="20" fontWeight='bold'>댓글</Typography>
      <Typography size="16" color="blue">
        (4)
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
  border-bottom: 1px solid ${customColor.gray};
`;