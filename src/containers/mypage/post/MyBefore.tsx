import { MyPageLayout } from '../components/MyPageLayout';

import styled from 'styled-components';
import { CustomPagination, Typography } from 'src/components/index';
import React from 'react';
import { MyCardList } from './components/MyCardList';
import { usePagination } from './hooks/usePagination';
import { useQueryMyPostBeforeAll } from './hooks/useQueryMyPostBeforeAll';

export const MyBefore = () => {
  const { page, offset, handleChangePage } = usePagination();
  const { list, isLoading, isError } = useQueryMyPostBeforeAll(page);
  return (
    <MyPageLayout>
      <Container>
        <Typography size="24" fontWeight="bold">
          의뢰전
        </Typography>
        <Hr />
        <MyCardList
          list={list}
          offset={offset}
          limit={12}
          isLoading={isLoading}
          isError={isError}
        />
        <CustomPagination
          activePage={page}
          onChange={handleChangePage}
          totalItemsCount={list.length}
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
  gap: 10px;
`;

const Hr = styled.hr`
  margin-bottom: 20px;
  width: 100%;
`;
