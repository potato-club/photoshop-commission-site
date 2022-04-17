import type { NextPage } from 'next';
import Link from 'next/link';
import CardList from 'src/components/CardList';
import { Typography } from 'src/components/Typography';
import styled from 'styled-components';

const Home: NextPage = () => {
  return (
    <Container>
      <SignUpBox>
        <SignUpComment>
          <Typography size="40" color="blue" fontWeight="900">
            원하시는 사진을 수정하고 싶으시다면 지금 바로 신청해주세요!
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
          <Link href="/" passHref>
            <A>
              <Typography size="16" fontWeight="900">
                더보기{'>>'}
              </Typography>
            </A>
          </Link>
        </Title>
        <Hr></Hr>
        <CardList />
      </RequestBox>
      <RequestBox>
        <Title>
          <Typography size="24" fontWeight="900">
            의뢰중
          </Typography>
          <Link href="/" passHref>
            <A>
              <Typography size="16" fontWeight="900">
                더보기 {'>>'}
              </Typography>
            </A>
          </Link>
        </Title>
        <Hr></Hr>
        <CardList />
      </RequestBox>
      <RequestBox>
        <Title>
          <Typography size="24" fontWeight="900">
            의뢰완료
          </Typography>
          <Link href="/" passHref>
            <A>
              <Typography size="16" fontWeight="900">
                더보기 {'>>'}
              </Typography>
            </A>
          </Link>
        </Title>
        <Hr></Hr>
        <CardList />
      </RequestBox>

      <AdvertiseBox>
        <TopBox>
          <Typography size="16">임송재 님</Typography>
          <Typography size="16">평점</Typography>
          <Typography size="16">3.8/5.0</Typography>
        </TopBox>
        <BottomBox>
          <Typography size="16">Top</Typography>
        </BottomBox>
      </AdvertiseBox>
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

const A = styled.a`
  text-decoration: none;
`;

const Hr = styled.hr`
  margin-bottom: 0;
`;

const AdvertiseBox = styled.div`
  position: fixed;
  width: 110px;
  height: 137px;
  display: flex;
  flex-direction: column;
  top: 350px;
  right: 235px;
  text-align: center;
`;

const TopBox = styled.div`
  width: 100%;
  box-shadow: 1px 1px 1px 1px;

`;
const BottomBox = styled.div`
  width: 100%;
  background-color: rgba(7, 104, 159, 1);
`;
