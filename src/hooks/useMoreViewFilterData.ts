import { useState } from 'react';
import { useQuery } from 'react-query';
import { stateApi } from 'src/apis/moreViewPage';
import { IData } from 'src/containers/mainPage/components/MainRequestBoard';

interface IUseMoreViewFilterData {
  state: string;
  page: number;
  selected: string;
  text: string;
}
export const useMoreViewFilterData = ({
  state,
  page,
  selected,
  text,
}: IUseMoreViewFilterData) => {
  const [filterData, setFilterData] = useState<IData[]>([]);

  useQuery(
    ['resetFilter', state],
    async () => {
      if (state === 'before') {
        return await stateApi.getBeforeAll(page);
      } else if (state === 'doing') {
        return await stateApi.getCompleteAll(page);
      } else if (state === 'complete') {
        return await stateApi.getRequestingAll(page);
      }
    },
    {
      enabled: text === '',
      onSuccess: res => setFilterData(res && res.data.content),
    },
  );
  useQuery(
    ['filter', selected, text, page],
    async () => {
      if (selected === 'nickname') {
        return await stateApi.getFilterNickName(text, page);
      } else if (selected === 'title') {
        return await stateApi.getFilterTitle(text, page);
      }
    },
    {
      enabled: !!selected && !!page && !!text && text !== '',
      onSuccess: res => setFilterData(res?.data.content),
    },
  );

  return { filterData };
};
