import Link from 'next/link';
import React, { useState } from 'react';
import { all } from 'src/constants/all/all';
import { dummyList } from 'src/dummy/dummyList';
import styled from 'styled-components';
import CardList from './CardList';
import { Typography } from './Typography';

interface MainRequestBoardProps {
  state: string;
}

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
export const MainRequestBoard = ({ state }: MainRequestBoardProps) => {
  const [limit, setLimit] = useState(8);

  return (
    <RequestBox>
      <Title>
        <Typography size="24" fontWeight="900">
          {state === 'before' && all.before}
          {state === 'doing' && all.doing}
          {state === 'complete' && all.complete}
        </Typography>
        <Plus>
          <Link href={`/main/${state}`} passHref>
            <A>
              <Typography size="16" fontWeight="900">
                {all.plus}
              </Typography>
            </A>
          </Link>
        </Plus>
      </Title>
      <Hr />
      <CardList list={dummyList} offset={0} limit={limit} />
    </RequestBox>
  );
};

export default MainRequestBoard;
