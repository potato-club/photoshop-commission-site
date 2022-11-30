import { GetServerSideProps } from 'next';
import React, { useState, useEffect } from 'react';
import { boardApi } from 'src/apis/board';
import { DetailPage } from 'src/containers';
import { BoardType } from 'src/types/board.type';
import { useRouter } from 'next/router';
import { useGetToken } from 'src/hooks/useGetToken';
import { checkApi } from 'src/apis/check';

export default function Detail() {
  const [data, setData] = useState<BoardType>();
  const router = useRouter();
  const { access, refresh } = useGetToken();
  const [myPost, setMyPost] = useState<boolean>(false);
  const [myJob, setMyJob] = useState('GUEST');

  const getData = async () => {
    const { data } = await boardApi.getDetail(router.query.id);
    setData({
      boardNo: data.id,
      title: data.title,
      state: data.questEnum,
      writer: data.nickname,
      createdDate: data.createdDate,
      modifiedDate: data.modifiedDate,
      imageUrls: data.image || [],
      imageOpen: data.imageOpen,
      contents: data.context,
      totalComment: data.comments.length || 0,
      commentList: data.comments || [],
    });
  };

  const checkWriter = async () => {
    const { data } = await checkApi.checkWriter(
      { id: router.query.id },
      access,
      refresh,
    );
    setMyPost(data);
  };

  const checkJob = async () => {
    const { data } = await checkApi.checkJob(access, refresh);
    setMyJob(data);
  };

  useEffect(() => {
    if (!router.isReady) return;
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  useEffect(() => {
    if (!access || !refresh) return;
    checkJob();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [access, refresh]);

  useEffect(() => {
    if (!router.isReady || !access || !refresh) return;
    checkWriter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router, access, refresh]);

  return <>{data && <DetailPage data={data} />}</>;
}

//////////////////////////////////// * get ServerSideProps 쓰는 코드 ///////////////////////////////////////

// export default function Detail(data: BoardType) {
//   console.log(data)
//   return <DetailPage data={data} />;
// }

// export const getServerSideProps: GetServerSideProps = async context => { // Todo S3 로 배포하게 되면 이 방법 말고 CSR 로 할 예정
//   const { data } = await boardApi.getDetail(context.query.id);

//   return {
//     props: {
//       boardNo: data.id,
//       title: data.title,
//       state: data.questEnum,
//       writer: data.nickname,
//       createdDate: data.createdDate,
//       modifiedDate: data.modifiedDate,
//       imageUrls: data.image || [],
//       imageOpen: data.imageOpen,
//       contents: data.context,
//       totalComment: data.comments.length || 0,
//       commentList: data.comments || [],
//     },
//   };
// };
