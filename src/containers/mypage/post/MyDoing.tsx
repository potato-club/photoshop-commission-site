import { MyPageLayout } from '../components/MyPageLayout';

import styled from 'styled-components';
import { CustomPagination, Typography } from 'src/components/index';
import { dummyList } from 'src/dummy/dummyList';
import React from 'react';
import { MyCardList } from './components/MyCardList';
import { usePagination } from './hooks/usePagination';

export const MyDoing = () => {
  const { page, offset, handleChangePage } = usePagination();

  return (
    <MyPageLayout>
      <Container>
        <Typography size="24" fontWeight="bold">
          의뢰중
        </Typography>
        <Hr />
        <MyCardList list={dummyList} offset={offset} limit={12} />
        <CustomPagination
          activePage={page}
          onChange={handleChangePage}
          totalItemsCount={dummyList.length}
        />
      </Container>
    </MyPageLayout>
  );
};

const Container = styled.div`
  width: 1178px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
`;

const Hr = styled.hr`
  margin-bottom: 20px;
  width: 100%;
`;
