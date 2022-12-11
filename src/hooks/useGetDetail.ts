import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { boardApi } from 'src/apis/board';
import { useState } from 'react';
import { BoardType } from 'src/types/board.type';


export const useGetDetail = () => {
  const router = useRouter();
  const [data, setData] = useState<BoardType>();

  useQuery(
    ['getItem', router.query.id],
    () => boardApi.getDetail(router.query.id),
    {
      enabled: router.isReady,
      onSuccess: ({ data }) => {
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
      },
      onError: error => {
        alert('디테일 페이지 로딩 오류');
      },
    },
  );
  
  // const getData = async () => {
  //   const { data } = await boardApi.getDetail(router.query.id);
  //   dispatch(
  //     newDetail({
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
  //     }),
  //   );
  //   return data;
  // };

  return {
    data,
  };
};
