import React, { useEffect } from 'react';
import { DetailPage } from 'src/containers';
import { useRouter } from 'next/router';
import { useGetToken } from 'src/hooks/useGetToken';
import { useGetDetail } from 'src/hooks/useGetDetail';
import { useCheckWriter } from 'src/hooks/useCheckWriter';

export default function Detail() {
  const router = useRouter();
  const { access, refresh } = useGetToken();
  const { data, getData } = useGetDetail();
  const { myPost, checkWriter } = useCheckWriter();

  useEffect(() => {
    if (!router.isReady) return;
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  useEffect(() => {
    if (!router.isReady || !access || !refresh) return;
    checkWriter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router, access, refresh]);


  return <>{data && myPost !== undefined && <DetailPage detailData={data} myPost={myPost} />}</>;
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
