import { ReactChild } from 'react';
import { Typography } from 'src/components';
import styled from 'styled-components';

type Props = {
  children: React.ReactChild;
};
export const ErrorMessage = ({ children }: Props) => {
  return (
    <Container>
      <Typography size="24" fontWeight="bold" color="danger">
        {children}
      </Typography>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
