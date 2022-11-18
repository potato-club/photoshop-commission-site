import { GetServerSideProps } from 'next';
import React from 'react';
import { boardApi } from 'src/apis/board';
import { DetailPage } from 'src/containers';
import { BoardType } from 'src/types/board.type';

export default function Detail(data: BoardType) {
  return <DetailPage data={data} />;
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { data } = await boardApi.getDetail(context.query.id);

  return {
    props: {
      boardNo: data[0].id,
      title: data[0].title,
      state: data[0].questEnum,
      writer: data[0].nickname,
      date: data[0].modifiedDate,
      imageUrls: data[0].image,
      imageSecret: false, // Todo api 아직 안만들어졌음
      contents: data[0].context,
      totalComment: 1, // Todo 댓글 length 로 받아도 될지 모르겠음. 스웨거 작성중이라고 하니 작성되면 확인하기
      commentList: [], // Todo 댓글 api 확인되면 사용
    },
  };
};
