import { Header } from 'src/components/header';
import Footer from './footer';
import styled from 'styled-components';

type LayoutType = React.PropsWithChildren<{}>;
export const Layout = ({ children }: LayoutType) => {
  return (
    <div style={{ height: '100%' }}>
      <Header />
      <Wrapper>
      {children}
      </Wrapper>
      <Footer />
    </div>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
`;