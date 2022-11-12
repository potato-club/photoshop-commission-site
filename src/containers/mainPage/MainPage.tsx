import type { NextPage } from 'next';
import { Typography, SideBox, MainRequestBoard } from '../../components/index';
import styled from 'styled-components';
import Link from 'next/link';
import { all } from 'src/constants/all/all';
import { pathName } from 'src/constants/pathName';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const MainPage: NextPage = () => {
  const [data, setData] = useState({});
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

  const onClick = () => {
    axios.post(
      `https://www.photoshopcommission.shop/list/create?loginUser=10`,
      {
        context: '테스트 글입니다.',
        fileList: ['test1.png', 'test2.png'],
        id: 1,
        questEnum: 'BEFORE',
        title: '테스트 제목입니다.',
      },
    );
  };

  useEffect(() => {
    axios
      .get('https://www.photoshopcommission.shop/main')
      .then(res => console.log(res.data));
  }, []);

  return (
    <Container>
      <button onClick={() => callKaKaoLoginHandler()}>
        카카오 로그인 테스트
      </button>
      <SignUpBox>
        <SignUpComment onClick={() => onClick()}>
          <Typography size="40" color="blue" fontWeight="900">
            {all.comment}
          </Typography>
        </SignUpComment>
        <Link href={pathName.SIGNUP} passHref>
          <SignUpBtn>
            <Typography size="20" color="white" fontWeight="900">
              {all.writeBtn}
            </Typography>
          </SignUpBtn>
        </Link>
      </SignUpBox>

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

const SignUpBox = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  flex-direction: column;
  margin-bottom: 150px;
`;

const SignUpComment = styled.div`
  text-align: center;
`;

const SignUpBtn = styled.button`
  margin: 60px auto 0 auto;
  width: 185px;
  background-color: rgba(7, 104, 159, 1);
  border-radius: 10px;
  padding: 10px 27px;
  border: none;
  :hover {
    background-color: black;
    cursor: pointer;
  }
`;