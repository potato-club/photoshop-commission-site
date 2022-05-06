import * as C from './CardList.style';
import { Card } from '../components/index';
import { dummyList } from '../dummy/dummyList';

export const CardList = () => {
  return (
    <C.CardBox>
      {dummyList
        .filter(e => e.state == '의뢰중' && e.id <= 8)
        .map(element => (
          <Card
            src={element.src}
            theme={element.theme}
            name={element.name}
            data={element.data}
            key={element.id}
          />
        ))}
    </C.CardBox>
  );
};

export default CardList;
