import { IDummyList } from 'src/dummy/dummyList';
import styled from 'styled-components';
import { MyCard } from './MyCard';

type Props = {
  offset: number;
  limit: number;
  list: any[];
};

export const MyCardList = ({ list, offset, limit }: Props) => {
  return (
    <CardBox>
      {list.slice(offset, offset + limit).map(cardInfo => (
        <MyCard key={cardInfo.id} {...cardInfo} />
      ))}
    </CardBox>
  );
};

const CardBox = styled.div`
  width: 876px;
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: start;
`;
