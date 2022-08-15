import React from 'react';
import Pagination, { ReactJsPaginationProps } from 'react-js-pagination';

type props = {
  activePage: number;
  onChange: (pageNumber: number) => void;
  totalItemsCount: number;
  perPage?: number;
};
export const CustomPagination = ({
  activePage,
  onChange,
  totalItemsCount,
  perPage = 15,
}: props) => {
  return (
    <Pagination
      activePage={activePage}
      itemsCountPerPage={perPage}
      totalItemsCount={totalItemsCount}
      onChange={onChange}
      pageRangeDisplayed={5}
      prevPageText={'‹'}
      nextPageText={'›'}
    />
  );
};

export default CustomPagination;
