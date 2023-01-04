import { SideBar } from './sidebar/Sidebar';
import styled from 'styled-components';

type MyPageLayoutType = React.PropsWithChildren<{}>;

export const MyPageLayout = ({ children }: MyPageLayoutType) => {
  return (
    <Container>
      <SideBarWrapper>
        <SideBar />
      </SideBarWrapper>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 1178px;

  margin: auto;
`;
export const SideBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 190px;
  height: 100%;

  min-height: 100%;
  margin-bottom: 80px;
  margin-top: 20px;
  border-radius: 20px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.6);
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 75%;
  margin: auto;
  margin-bottom: auto;
  margin-top: 60px;
  height: 100%;
`;
