import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { ModifyPage } from 'src/containers/modifyPage/ModifyPage';
import { useCheckWriter } from 'src/hooks/useCheckWriter';
import { useGetDetail } from 'src/hooks/useGetDetail';
import { useGetToken } from 'src/hooks/useGetToken';
import { errorModal } from 'src/utils/interactionModal';

const Modify: NextPage = () => {
  const router = useRouter();
  const { data, getData } = useGetDetail();
  const { access, refresh } = useGetToken();
  const [check, setCheck] = useState(false);

  const { checkWriter } = useCheckWriter();

  const checkMyPost = async () => {
    const data = await checkWriter();
    if (!data) {
      await errorModal(
        '글 수정, 삭제는 작성자 본인만 할 수 있습니다.',
        '이전페이지로 이동합니다',
      );
      router.push('/main');
      return;
    }
    setCheck(true);
    getData();
  };
  // 이상한사람이 들어오면 // * 글 수정, 삭제는 작성자 본인만 할 수 있습니다.

  useEffect(() => {
    if (!router.isReady || !access || !refresh) return;
    checkMyPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router, access, refresh]);

  return (
    <>
      {data && check && (
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
