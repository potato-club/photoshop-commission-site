import type { NextPage } from 'next';
import { Typography, SideBox, CardList } from '../../components/index';
import styled from 'styled-components';
import Link from 'next/link';
import { useState } from 'react';
import { dummyList } from 'src/dummy/dummyList';
import { all } from 'src/constants/all/all';

export const MainPage: NextPage = () => {
  const [limit, setLimit] = useState(8);
  const offset = 0;

  return (
    <Container>
      <SignUpBox>
        <SignUpComment>
          <Typography size="40" color="blue" fontWeight="900">
            {all.comment}
          </Typography>
        </SignUpComment>
        <Link href={'/signup'} passHref>
          <A>
            <SignUpBtn>
              <Typography size="20" color="white" fontWeight="900">
                {all.writeBtn}
              </Typography>
            </SignUpBtn>
          </A>
        </Link>
      </SignUpBox>
      <RequestBox>
        <Title>
          <Typography size="24" fontWeight="900">
            {all.before}
          </Typography>
          <Plus>
            <Link href={'/main/before'} passHref>
              <A>
                <Typography size="16" fontWeight="900">
                  {all.plus}
                </Typography>
              </A>
            </Link>
          </Plus>
        </Title>
        <Hr />
        <CardList dummyList={dummyList} offset={offset} limit={limit} />
      </RequestBox>
      <RequestBox>
        <Title>
          <Typography size="24" fontWeight="900">
            {all.doing}
          </Typography>
          <Plus>
            <Link href={'/main/doing'} passHref>
              <A>
                <Typography size="16" fontWeight="900">
                  {all.plus}
                </Typography>
              </A>
            </Link>
          </Plus>
        </Title>
        <Hr />
        <CardList dummyList={dummyList} offset={offset} limit={limit} />
      </RequestBox>
      <RequestBox>
        <Title>
          <Typography size="24" fontWeight="900">
            {all.complete}
          </Typography>
          <Plus>
            <Link href={'/main/complete'} passHref>
              <A>
                <Typography size="16" fontWeight="900">
                  {all.plus}
                </Typography>
              </A>
            </Link>
          </Plus>
        </Title>
        <Hr />
        <CardList dummyList={dummyList} offset={offset} limit={limit} />
      </RequestBox>
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
  }
`;

const RequestBox = styled.div`
  width: 100%;
  margin-bottom: 150px;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  text-align: center;
`;
