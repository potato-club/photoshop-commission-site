import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { boardApi } from 'src/apis/board';
import { DetailPage } from 'src/containers';
import { BoardType } from 'src/types/board.type';

export default function Detail() {
  const router = useRouter();
  const [data, setData] = useState<BoardType>();

  const getData = useCallback(async () => {
    const { data } = await boardApi.getDetail(router.query.id);
    setData({
      boardNo: data.id,
      title: data.title,
      state: data.questEnum,
      writer: data.nickname,
      date: new Date(),
      imageUrls: data.image,
      imageSecret: false, // Todo api 아직 안만들어졌음
      contents: data.context,
      totalComment: 1, // Todo 댓글 length 로 받아도 될지 모르겠음. 스웨거 작성중이라고 하니 작성되면 확인하기
      commentList: [], // Todo 댓글 api 확인되면 사용
    });
  }, [router.query.id]);

  useEffect(() => {
    if (!router.isReady) return;
    getData();
  }, [router.isReady, getData]);

  return <>{data && <DetailPage data={data} />}</>;
}
