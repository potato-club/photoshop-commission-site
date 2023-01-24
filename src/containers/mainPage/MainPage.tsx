import type { NextPage } from 'next';
import { SideBox, MainRequestBoard } from '../../components/index';
import styled from 'styled-components';
import Comment from './components/Comment';
import Write from './components/Write';

export const MainPage: NextPage = () => {
  
  return (
    <Container>
      <WriteBox>
        <Comment />
        <Write />
      </WriteBox>

      <MainRequestBoard state="before" />
      <MainRequestBoard state="doing" />
      <MainRequestBoard state="complete" />

      <SideBox />
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  width: 100%;
  max-width: 1178px;
  margin: 0 auto;
  padding: 140px 0;
  display: flex;
  flex-direction: column;
  gap: 160px 0;
`;

const WriteBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
