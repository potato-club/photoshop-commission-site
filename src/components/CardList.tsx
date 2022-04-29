import * as C from './CardList.style';
import { useState } from 'react';
import { Card } from '../components';



export const CardList = () => {
  const [post, setPost] = useState([
    {
      src: '',
      theme: '',
      name: '',
      data: '',
      state: '의뢰중',
      id: 1,
    },
    {
      src: '',
      theme: '',
      name: '',
      data: '',
      state: '의뢰전',
      id: 2,
    },
    {
      src: '',
      theme: '',
      name: '',
      data: '',
      state: '의뢰중',
      id: 3,
    },
    {
      src: '',
      theme: '',
      name: '',
      data: '',
      state: '의뢰중',
      id: 4,
    },
    {
      src: '',
      theme: '',
      name: '',
      data: '',
      state: '의뢰중',
      id: 5,
    },
    {
      src: '',
      theme: '',
      name: '',
      data: '',
      state: '의뢰중',
      id: 6,
    },
  ]);
  return (
    <C.CardBox>
      {post
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
