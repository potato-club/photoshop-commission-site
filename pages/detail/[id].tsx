import React, { useEffect } from 'react';
import { DetailPage } from 'src/containers';
import { useGetDetail } from 'src/hooks/useGetDetail';
import { useCheckWriter } from 'src/hooks/useCheckWriter';

export default function Detail() {
  const { data } = useGetDetail();
  const { myPost } = useCheckWriter();


  return <>{data && <DetailPage detailData={data} myPost={myPost} />}</>;
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
