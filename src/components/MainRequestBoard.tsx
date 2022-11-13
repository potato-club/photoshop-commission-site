import Link from 'next/link';
import { pathName } from 'src/constants/pathName';
import React, { useEffect, useState } from 'react';
import { all } from 'src/constants/all/all';
import { dummyList } from 'src/dummy/dummyList';
import styled from 'styled-components';
import CardList from './CardList';
import { Typography } from './Typography';
import axios from 'axios';

interface MainRequestBoardProps {
  state: string;
}

interface IComment {
  comment: string;
  id: number;
  nickname: string;
}

interface IImage {
  fileName: string;
  fileUrl: string;
  boardListId: number;
}
export interface IData {
  id: number;
  image: IImage[];
  nickname: string;
  questEnum: string;
  title: string;
  createDate: Date;
}

export const MainRequestBoard = ({ state }: MainRequestBoardProps) => {
  const [limit, setLimit] = useState(8);
  const [data, setData] = useState([]);

  useEffect(() => {
    const a = async () => {
      try {
        const res = await axios.get(
          'https://www.photoshopcommission.shop/main/before',
        );
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    a();
  }, []);

  useEffect(() => console.log(data), [data]);

  return (
    <RequestBox>
      <Title>
        <Typography size="24" fontWeight="900">
          {state === 'before' && all.before}
          {state === 'doing' && all.doing}
          {state === 'complete' && all.complete}
        </Typography>
        <Plus>
          <Link href={`${pathName.MOREVIEW}/${state}`} passHref>
            <A>
              <Typography size="16" fontWeight="900">
                {all.plus}
              </Typography>
            </A>
          </Link>
        </Plus>
      </Title>
      <Hr />
      <CardList list={data} offset={0} limit={limit} />
    </RequestBox>
  );
};

export default MainRequestBoard;

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
