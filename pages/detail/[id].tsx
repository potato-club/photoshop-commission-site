import { useRouter } from 'next/router';
import React from 'react'
import { Typography } from 'src/components/Typography';
import { DetailPage } from 'src/containers';
import { boardDummy } from 'src/dummy/boardDummy';
export default function Detail() {
  const router = useRouter();

  if(!router.query.id) return <Typography size='16'>로딩중...</Typography>;

    // Todo : api 를 통해 id 에 대한 게시글을 요청
  const data = boardDummy.filter(data => data.boardNo === Number(router.query.id))[0];

  // 오류페이지
  if(data === undefined) return <Typography size='16'>페이지가 없습니다.</Typography>

  
  return <DetailPage data={data} />;
}
