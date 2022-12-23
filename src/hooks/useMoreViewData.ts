import { useState } from 'react';
import { useQuery } from 'react-query';
import { stateApi } from 'src/apis/moreViewPage';
import { IData } from 'src/containers/mainPage/components/MainRequestBoard';

export const useMoreViewData = (state: string, page: number) => {
  const [data, setData] = useState<IData[]>([]);
  const [total, setTotal] = useState();
  const [theme, setTheme] = useState('');

  useQuery(
    ['moreView', state, page],
    async () => {
      if (state === 'before') {
        setTheme('의뢰전 게시글');
        return await stateApi.getBeforeAll(page);
      } else if (state === 'doing') {
        setTheme('의뢰중 게시글');
        return await stateApi.getCompleteAll(page);
      } else if (state === 'complete') {
        setTheme('의뢰완료 게시글');
        return await stateApi.getRequestingAll(page);
      }
    },
    {
      onSuccess: res => {
        setTotal(res?.data.totalElements);
        setData(res?.data.content);
      },
      enabled: !!state && !!page,
    },
  );

  return { data, theme, setData, total };
};
