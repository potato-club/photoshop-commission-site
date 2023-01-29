import { NextPage } from 'next';
import React, { useState } from 'react';
import MoreViewPage from 'src/containers/MoreViewPage/MoreViewPage';
import { useMoreViewData } from 'src/hooks/useMoreViewData';

export default function BeforePage() {
  const [page, setPage] = useState(1);
  const { data, theme, total } = useMoreViewData(page, "before");
  const isData = data && theme && total;
  return (
    <>
      {isData && (
        <MoreViewPage
          data={data}
          theme={theme}
          total={total}
          page={page}
          setPage={setPage}
        />
      )}
    </>
  );
};
