import type { NextPage } from 'next';
import { Typography, SideBox, MainRequestBoard } from '../../components/index';
import styled from 'styled-components';
import Link from 'next/link';
import { all } from 'src/constants/all/all';
import { pathName } from 'src/constants/pathName';

export const MainPage: NextPage = () => {
  return (
    <Container>
      <SignUpBox>
        <SignUpComment>
          <Typography size="40" color="blue" fontWeight="900">
            {all.comment}
          </Typography>
        </SignUpComment>
        <Link href={pathName.SIGNUP} passHref>
          <A>
            <SignUpBtn>
              <Typography size="20" color="white" fontWeight="900">
                {all.writeBtn}
              </Typography>
            </SignUpBtn>
          </A>
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
  }
`;

const A = styled.a`
  text-decoration: none;
  text-align: center;
`;
