import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { checkApi } from 'src/apis/check';
import { checkMyPost } from 'src/redux-toolkit/slice/detailData';
import { useGetToken } from './useGetToken';
import { detailData } from "./../redux-toolkit/slice/detailData";
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux-toolkit/store';

export const useCheckWriter = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { access, refresh } = useGetToken();

  const checkWriter = async () => {
    const { data } = await checkApi.checkWriter(
      { id: router.query.id },
      access,
      refresh,
    );
    dispatch(checkMyPost(data));
    return data;
  };
  return {
    checkWriter,
  };
};
