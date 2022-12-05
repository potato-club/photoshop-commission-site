import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { boardApi } from 'src/apis/board';
import { newDetail } from 'src/redux-toolkit/slice/detailData';

export const useGetDetail = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const getData = async () => {
    const { data } = await boardApi.getDetail(router.query.id);
    dispatch(
      newDetail({
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
      }),
    );
    return data;
  };

  return {
    getData,
  };
};
