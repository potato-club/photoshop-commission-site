import { useMemo, useState } from 'react';

export const usePagination = () => {
  const [page, setPage] = useState(1);
  const offset = useMemo(() => (page - 1) * 12, [page]);

  const handleChangePage = (page: number) => {
    setPage(page);
    window.scrollTo(0, 0);
  };

  return { page, offset, handleChangePage };
};
