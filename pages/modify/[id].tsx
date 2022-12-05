import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { ModifyPage } from 'src/containers/modifyPage/ModifyPage';
import { useCheckWriter } from 'src/hooks/useCheckWriter';
import { useGetDetail } from 'src/hooks/useGetDetail';
import { useGetToken } from 'src/hooks/useGetToken';

const Modify: NextPage = () => {
  const router = useRouter();
  const { getData } = useGetDetail();
  const { access, refresh } = useGetToken();
  const [check, setCheck] = useState(false);

  const { checkWriter } = useCheckWriter();

  const checkMyPost = async () => {
    const data = await checkWriter();
    if (!data) {
      alert('글 수정, 삭제는 작성자 본인만 할 수 있습니다.');
      router.back();
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

  return <>{router.isReady && check && <ModifyPage />}</>;
};

export default Modify;
