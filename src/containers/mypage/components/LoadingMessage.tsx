import { Typography } from 'src/components';
import styled from 'styled-components';

type Props = {
  children: React.ReactChild;
};
export const LoadingMessage = ({ children }: Props) => {
  return (
    <Container>
      <Typography size="24" fontWeight="bold" color="blue">
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
