import type { NextPage } from 'next';
import { Typography, SideBox, CardList } from '../src/components/index';
import styled from 'styled-components';
import Link from 'next/link';
import { useState } from 'react';

const Home: NextPage = () => {
  const [limit, setLimit] = useState(8);
  return (
    <Container>
      <SignUpBox>
        <SignUpComment>
          <Typography size="40" color="blue" fontWeight="900">
            원하는 사진을 수정하고 싶으시다면 지금 바로 신청해주세요
          </Typography>
        </SignUpComment>
        <SignUpBtn>
          <Typography size="20" color="white" fontWeight="900">
            의뢰 작성하기
          </Typography>
        </SignUpBtn>
      </SignUpBox>
      <RequestBox>
        <Title>
          <Typography size="24" fontWeight="900">
            의뢰전
          </Typography>
          <Plus>
            <Link href={'/before'} passHref>
              <A>
                <Typography size="16" fontWeight="900">
                  더보기
                </Typography>
              </A>
            </Link>
          </Plus>
        </Title>
        <Hr />
        <CardList offset={0} limit={8} />
      </RequestBox>
      <RequestBox>
        <Title>
          <Typography size="24" fontWeight="900">
            의뢰중
          </Typography>
          <Plus>
            <Link href={'/doing'} passHref>
              <A>
                <Typography size="16" fontWeight="900">
                  더보기
                </Typography>
              </A>
            </Link>
          </Plus>
        </Title>
        <Hr />
        <CardList offset={0} limit={8} />
      </RequestBox>
      <RequestBox>
        <Title>
          <Typography size="24" fontWeight="900">
            의뢰완료
          </Typography>
          <Plus>
            <Link href={'/complete'} passHref>
              <A>
                <Typography size="16" fontWeight="900">
                  더보기
                </Typography>
              </A>
            </Link>
          </Plus>
        </Title>
        <Hr />
        <CardList offset={0} limit={8} />
      </RequestBox>
      <SideBox />
    </Container>
  );
};

export default Home;

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
  }
`;

const RequestBox = styled.div`
  width: 100%;
  margin-bottom: 185px;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Plus = styled.span`
  text-decoration: none;
  margin: 0px 15px 0 0;
  :hover {
    cursor: pointer;
  }
`;

const Hr = styled.hr`
  margin-bottom: 0;
`;

const A = styled.a`
  text-decoration: none;
`;
