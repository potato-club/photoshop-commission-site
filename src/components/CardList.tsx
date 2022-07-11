import * as C from './CardList.style';
import { Card } from '../components/index';

type CardListType = {
  offset: number;
  limit: number;
  list: Array<{
    src: string;
    theme: string;
    name: string;
    data: string;
    date: Date;
    id: number;
  }>;
};

export const CardList = ({ list, offset, limit }: CardListType) => {
  return (
    <C.CardBox>
      {list.slice(offset, offset + limit).map(cardInfo => (
        <Card key={cardInfo.id} {...cardInfo} />
      ))}
    </C.CardBox>
  );
};

export default CardList;
