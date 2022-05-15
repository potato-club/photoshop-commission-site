import React from 'react';
import Pagination from 'react-js-pagination';
import { dummyList } from 'src/dummy/dummyList';

const Page = ({ page, handlePageChange }: any) => {
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={15}
      totalItemsCount={dummyList.length}
      onChange={handlePageChange}
      pageRangeDisplayed={5}
      prevPageText={'‹'}
      nextPageText={'›'}
    />
  );
};

export default Page;
