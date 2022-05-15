import * as C from './CardList.style';
import { Card } from '../components/index';
import { dummyList } from '../dummy/dummyList';

type CardListType = {
  offset: number;
  limit: number;
};

export const CardList = ({ offset, limit }: CardListType) => {
  return (
    <C.CardBox>
      {dummyList.slice(offset, offset + limit).map(e => (
        <Card
          src={e.src}
          theme={e.theme}
          name={e.name}
          data={e.data}
          key={e.id}
        />
      ))}
    </C.CardBox>
  );
};

export default CardList;
