import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { ModifyPage } from 'src/containers/modifyPage/ModifyPage';
import { useCheckWriter } from 'src/hooks/useCheckWriter';
import { useGetDetail } from 'src/hooks/useGetDetail';
import { useGetToken } from 'src/hooks/useGetToken';
import { errorModal } from 'src/utils/interactionModal';

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
