import { Card } from '../components/index';
import styled from 'styled-components';
import { IData } from '../containers/mainPage/components/MainRequestBoard';

interface CardListType {
  list: IData[];
}

export const CardList = ({ list }: CardListType) => {
  return (
    <CardBox>
      {list && list.map(cardInfo => <Card key={cardInfo.id} {...cardInfo} />)}
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
