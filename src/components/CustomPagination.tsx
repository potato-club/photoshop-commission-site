import React from 'react';
import Pagination, { ReactJsPaginationProps } from 'react-js-pagination';

export const CustomPagination = ({
  activePage,
  onChange,
  totalItemsCount,
  itemsCountPerPage,
}: ReactJsPaginationProps) => {
  return (
    <Pagination
      activePage={activePage}
      itemsCountPerPage={itemsCountPerPage}
      totalItemsCount={totalItemsCount}
      onChange={onChange}
      pageRangeDisplayed={5}
      prevPageText={'‹'}
      nextPageText={'›'}
    />
  );
};

export default CustomPagination;
