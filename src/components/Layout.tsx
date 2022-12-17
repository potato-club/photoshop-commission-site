import { Header } from 'src/components/header';
import Footer from './footer';
import styled from 'styled-components';
import { useCurrentMode } from 'src/hooks/useCurrentMode';

type LayoutType = React.PropsWithChildren<{}>;
export const Layout = ({ children }: LayoutType) => {
  const { backgroundColor } = useCurrentMode();

  return (
    <div style={{ height: '100%' }}>
      <Header />
      <Wrapper color={backgroundColor}>{children}</Wrapper>
      <Footer />
    </div>
  );
};

const Wrapper = styled.div<{ color: string }>`
  min-height: 100vh;
  background-color: ${({ color }) => color};
`;
