import React from 'react';
import { Typography } from 'src/components/Typography';
import { all } from 'src/constants/all/all';
import styled from 'styled-components';

const Comment = () => {
    return (
        <Container>
          <Typography size="40" color="blue" fontWeight="900">
            {all.comment}
          </Typography>
        </Container>
    );
};

export default Comment;

const Container = styled.div`
  text-align: center;
`;