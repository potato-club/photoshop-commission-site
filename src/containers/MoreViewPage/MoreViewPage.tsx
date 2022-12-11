import styled from 'styled-components';
import {
  CardList,
  Typography,
  SideBox,
  CustomPagination,
} from 'src/components/index';
import { dummyList } from 'src/dummy/dummyList';
import { all } from 'src/constants/all/all';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { stateApi } from 'src/apis/moreViewPage';
import Hr from './components/Hr';
import Title from './components/Title';
import SignUp from './components/SignUp';
import { useQuery } from 'react-query';
import { IData } from '../mainPage/components/MainRequestBoard';

const StatePage = () => {
  const [page, setPage] = useState(1);
  const router = useRouter();
  const { state } = router.query;
  const [data, setData] = useState<IData[]>([]);
  const [theme, setTheme] = useState('');

  useQuery(
    ['moreView', state, page],
    async () => {
      if (state === 'before') {
        setTheme(all.before + ' ' + all.post);
        return await stateApi.getBeforeAll(page);
      } else if (state === 'doing') {
        setTheme(all.doing + ' ' + all.post);
        return await stateApi.getCompleteAll(page);
      } else if (state === 'complete') {
        setTheme(all.complete + ' ' + all.post);
        return await stateApi.getRequestingAll(page);
      }
    },
    {
      onSuccess: res => setData(res?.data.content),
      enabled: !!state && !!page,
    },
  );

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handlePageChange = (page: number) => {
    setPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <Container>
      <Post>
        <Typography size="40" color="blue" fontWeight="900">
          {theme}
        </Typography>
      </Post>
      <Title setData={setData} page={page} state={state as string} />
      <Hr />
      <CardListWrap>
        <CardList list={data} />
      </CardListWrap>
      <CustomPagination
        itemClass="page"
        activePage={page}
        onChange={handlePageChange}
        totalItemsCount={dummyList.length}
        itemsCountPerPage={15}
      />
      <SignUp />
      <SideBox />
    </Container>
  );
};

export default StatePage;

const CardListWrap = styled.div`
  margin-bottom: 130px;
`;
const Container = styled.div`
  width: 1178px;
  margin: 0 auto;
  padding: 140px 0;
  display: flex;
  flex-direction: column;
`;

const Post = styled.div`
  margin-bottom: 105px;
  text-align: center;
`;
