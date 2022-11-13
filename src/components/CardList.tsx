import { Card } from '../components/index';
import { IDummyList } from 'src/dummy/dummyList';
import styled from 'styled-components';
import { IData } from './MainRequestBoard';

interface CardListType {
  offset: number;
  limit: number;
  list: IData[];
}

export const CardList = ({ list, offset, limit }: CardListType) => {
  return (
    <CardBox>
      {list.slice(offset, offset + limit).map(cardInfo => (
        <Card key={cardInfo.id} {...cardInfo} />
      ))}
    </CardBox>
  );
};

export default CardList;

const CardBox = styled.div`
  width: 1178px;
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: start;
`;
