import Link from 'next/link';
import { pathName } from 'src/constants/pathName';
import { Typography } from 'src/components';
import { all } from 'src/constants/all/all';
import { dummyList } from 'src/dummy/dummyList';
import styled from 'styled-components';
import { MyPageLayout } from '../components/MyPageLayout';
import { MyCardList } from './components/MyCardList';

type RequestBoardProps = {
  state: 'before' | 'doing' | 'complete';
};

const BEFORE = 'before';
const DOING = 'doing';
const COMPLETE = 'complete';

const LIMIT_LENGTH = 4;

export const MyAll = () => {
  return (
    <MyPageLayout>
      <Container>
        <RequestBoard state={BEFORE} />
        <RequestBoard state={DOING} />
        <RequestBoard state={COMPLETE} />
      </Container>
    </MyPageLayout>
  );
};

const RequestBoard = ({ state }: RequestBoardProps) => {
  return (
    <RequestBox>
      <Title>
        <Typography size="24" fontWeight="900">
          {state === BEFORE && all.before}
          {state === DOING && all.doing}
          {state === COMPLETE && all.complete}
        </Typography>
        <Plus>
          <Link href={`/mypage/post/${state}`} passHref>
            <A>
              <Typography size="16" fontWeight="900">
                {all.plus}
              </Typography>
            </A>
          </Link>
        </Plus>
      </Title>
      <Hr />
      <MyCardList list={dummyList} offset={0} limit={LIMIT_LENGTH} />
    </RequestBox>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const RequestBox = styled.div`
  width: 100%;
  margin-bottom: 80px;
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
