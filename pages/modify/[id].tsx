import { NextPage } from 'next';
import React from 'react';
import { ModifyPage } from 'src/containers/modifyPage/ModifyPage';
import { useCheckWriter } from 'src/hooks/useCheckWriter';
import { useGetDetail } from 'src/hooks/useGetDetail';

const Modify: NextPage = () => {
  const { data } = useGetDetail();
  const { myPost } = useCheckWriter();

  return (
    <>
      {data && myPost && (
        <ModifyPage
          imageUrls={data.imageUrls}
          title={data.title}
          contents={data.contents}
        />
      )}
    </>
  );
};

export default Modify;
