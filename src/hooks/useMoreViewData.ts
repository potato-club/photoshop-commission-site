import { useRouter } from 'next/router';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { stateApi } from 'src/apis/moreViewPage';
import { IData } from 'src/containers/mainPage/components/MainRequestBoard';

export const useMoreViewData = (page: number) => {
  const [data, setData] = useState<IData[]>([]);
  const [total, setTotal] = useState();
  const [theme, setTheme] = useState('');
  const router = useRouter();

  useQuery(
    ['moreView', router.query.state, page],
    async () => {
      const { state } = router.query;
      if (state === 'before') {
        setTheme('의뢰전 게시글');
        return await stateApi.getBeforeAll(page);
      } else if (state === 'doing') {
        setTheme('의뢰중 게시글');
        return await stateApi.getRequestingAll(page);
      } else {
        setTheme('의뢰완료 게시글');
        return await stateApi.getCompleteAll(page);
      }
    },
    {
      enabled: router.isReady && !!page,
      onSuccess: ({data}) => {
        setTotal(data.totalElements);
        setData(data.content);
      },
      onError: error => {
        alert('MoreView Page 로딩 오류');
      },
    },
  );

  return { data, theme, total };
};
