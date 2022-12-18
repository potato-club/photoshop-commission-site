import { MyPageLayout } from '../components/MyPageLayout';

import styled from 'styled-components';
import { CustomPagination, Typography } from 'src/components/index';
import React from 'react';
import { MyCardList } from './components/MyCardList';
import { usePagination } from './hooks/usePagination';
import { useQueryMyPostCompleteAll } from './hooks/useQueryMyPostCompleteAll';

export const MyComplete = () => {
  const { page, offset, handleChangePage } = usePagination();
  const { list, isLoading, isError } = useQueryMyPostCompleteAll(page);

  return (
    <MyPageLayout>
      <Container>
        <Typography size="24" fontWeight="bold">
          의뢰완료
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
  margin-bottom: 100px;
  flex-direction: column;
  gap: 10px;
`;

const Hr = styled.hr`
  margin-bottom: 20px;
  width: 100%;
`;
