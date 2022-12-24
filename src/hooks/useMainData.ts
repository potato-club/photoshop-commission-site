import { useState } from 'react';
import { useQuery } from 'react-query';
import { mainApi } from 'src/apis/mainPage';
import { IData } from 'src/containers/mainPage/components/MainRequestBoard';

export const useMainData = (state: string) => {
  const [data, setData] = useState<IData[]>([]);

  useQuery(
    ['state', state],
    async () => {
      if (state === 'before') {
        return await mainApi.getBefore();
      } else if (state === 'doing') {
        return await mainApi.getRequesting();
      } else if (state === 'complete') {
        return await mainApi.getComplete();
      }
    },
    {
      onSuccess: res => res && setData(res.data),
      onError: err => console.log(err),
    },
  );

  return { data };
};
