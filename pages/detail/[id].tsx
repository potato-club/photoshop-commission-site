import { GetServerSideProps } from 'next';
import React from 'react';
import { boardApi } from 'src/apis/board';
import { DetailPage } from 'src/containers';
import { BoardType } from 'src/types/board.type';

export default function Detail(data: BoardType) {
  console.log(data)
  return <DetailPage data={data} />;
}

export const getServerSideProps: GetServerSideProps = async context => { // Todo S3 로 배포하게 되면 이 방법 말고 CSR 로 할 예정
  const { data } = await boardApi.getDetail(context.query.id);

  return {
    props: {
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
    },
  };
};

