import React from 'react';
import Pagination, { ReactJsPaginationProps } from 'react-js-pagination';

export const CustomPagination = ({
  activePage,
  onChange,
  totalItemsCount,
}: ReactJsPaginationProps) => {
  return (
    <Pagination
      activePage={activePage}
      itemsCountPerPage={15}
      totalItemsCount={totalItemsCount}
      onChange={onChange}
      pageRangeDisplayed={5}
      prevPageText={'‹'}
      nextPageText={'›'}
    />
  );
};

export default CustomPagination;
