import { GetServerSideProps } from 'next';
import React from 'react';
import { boardApi } from 'src/apis/board';
import { DetailPage } from 'src/containers';
import { BoardType } from 'src/types/board.type';

export default function Detail(data: BoardType) {
  console.log(data)
  return <DetailPage data={data} />;
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { data } = await boardApi.getDetail(context.query.id);

  return {
    props: {
      boardNo: data.id,
      title: data.title,
      state: data.questEnum,
      writer: data.nickname,
      createdDate: data.createdDate || '2022-11-13 13:01:58.0', // Todo : 백엔드 createDate -> createdDate 로 변수명 수정예정이라 없는값이므로 우선 더미데이터 사용
      modifiedDate: data.modifiedDate || '2022-11-13 13:01:58.0',
      imageUrls: data.image,
      imageSecret: false, // Todo api 아직 안만들어졌음
      contents: data.context,
      totalComment: data.comments.length || 0,
      commentList: data.comments || [],
    },
  };
};
