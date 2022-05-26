import * as C from './CardList.style';
import { Card } from '../components/index';

type CardListType = {
  offset: number;
  limit: number;
  dummyList: Array<{
    src: string;
    theme: string;
    name: string;
    data: string;
    date: string;
    id: number;
  }>;
};

export const CardList = ({ dummyList, offset, limit }: CardListType) => {
  return (
    <C.CardBox>
      {dummyList.slice(offset, offset + limit).map(e => (
        <Card
          src={e.src}
          theme={e.theme}
          name={e.name}
          data={e.data}
          date={e.date}
          key={e.id}
        />
      ))}
    </C.CardBox>
  );
};

export default CardList;
