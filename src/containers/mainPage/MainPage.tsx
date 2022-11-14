import type { NextPage } from 'next';
import { SideBox, MainRequestBoard } from '../../components/index';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Comment from './components/Comment';
import Write from './components/Write';

export const MainPage: NextPage = () => {
  const router = useRouter();
  const callKaKaoLoginHandler = () => {
    router.push({
      pathname: process.env.NEXT_PUBLIC_PATHNAME,
      query: {
        response_type: process.env.NEXT_PUBLIC_RESPONSE_TYPE,
        client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
        redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI,
      },
    });
  };

  return (
    <Container>
      <button onClick={() => callKaKaoLoginHandler()}>
        카카오 로그인 테스트
      </button>
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
  width: 1178px;
  margin: 0 auto;
  padding: 140px 0;
  display: flex;
  flex-direction: column;
`;

const WriteBox = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  flex-direction: column;
  margin-bottom: 150px;
`;
