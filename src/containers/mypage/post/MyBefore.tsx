import { MyPageLayout } from '../components/MyPageLayout';

import styled from 'styled-components';
import { CustomPagination, Typography } from 'src/components/index';
import { dummyList } from 'src/dummy/dummyList';
import React, { useMemo, useState } from 'react';
import { MyCardList } from '../components/post/MyCardList';

export const MyBefore = () => {
  const [page, setPage] = useState(1);
  const offset = useMemo(() => (page - 1) * 12, [page]);

  const handlePageChange = (page: number) => {
    setPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <MyPageLayout>
      <Container>
        <Typography size="24" fontWeight="900">
          의뢰전
        </Typography>
        <div>
          <Hr />
        </div>
        <div>
          <MyCardList list={dummyList} offset={offset} limit={12} />
        </div>
        <CustomPagination
          activePage={page}
          onChange={handlePageChange}
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
`;

const Hr = styled.hr`
  margin-bottom: 20px;
`;
