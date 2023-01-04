import { Header } from 'src/components/header';
import Footer from './footer';
import styled from 'styled-components';
import { useCurrentMode } from 'src/hooks/useCurrentMode';

type LayoutType = React.PropsWithChildren<{}>;
export const Layout = ({ children }: LayoutType) => {
  const { backgroundColor } = useCurrentMode();

  return (
    <>
      <Header />
      <Wrapper color={backgroundColor}>{children}</Wrapper>
      <Footer />
    </>
  );
};

const Wrapper = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-color: ${({ color }) => color};
  overflow: auto;
`;
