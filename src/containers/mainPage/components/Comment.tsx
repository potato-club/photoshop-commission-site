import React from 'react';
import { Typography } from 'src/components/Typography';
import styled from 'styled-components';

const Comment = () => {
  return (
    <Container>
      <Typography size="40" color="blue" fontWeight="bold">
        원하시는 사진을 수정하고 싶으시다면 지금 바로 신청해주세요!
      </Typography>
    </Container>
  );
};

export default Comment;

const Container = styled.div`
  text-align: center;
`;
