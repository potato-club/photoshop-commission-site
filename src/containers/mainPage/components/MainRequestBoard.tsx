import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CardList from '../../../components/CardList';
import { mainApi } from 'src/apis/mainPage';
import Title from './Title';
import { imageOpenType } from 'src/types/imageOpen.type';

export interface MainRequestBoardProps {
  state: string;
}

interface IImage {
  fileName: string;
  fileUrl: string;
}
export interface IData {
  id: number;
  createDate: string;
  nickname: string;
  title: string;
  imageOpen: imageOpenType;
  questEnum: string;
  image: IImage[];
}

export const MainRequestBoard = ({ state }: MainRequestBoardProps) => {
  const [data, setData] = useState([]);

  type map = {
    [key: string]: () => Promise<void>;
  };
  const dataMap: map = {
    before: async () => {
      const beforeData = await mainApi.getBefore();
      setData(beforeData.data);
    },
    complete: async () => {
      const completeData = await mainApi.getComplete();
      setData(completeData.data);
    },
    doing: async () => {
      const requestingData = await mainApi.getRequesting();
      setData(requestingData.data);
    },
  };

  const getData = (type: string) => {
    return dataMap[type]();
  };

  useEffect(() => {
    // const findData = (type: string) => {
    //   getData(type);
    // };
    // findData(state);

    (() => {
      getData(state);
    })();
  }, [state]);

  useEffect(() => console.log(data), [data]);

  return (
    <RequestBox>
      <Title state={state} />
      <Hr />
      <CardList list={data} />
    </RequestBox>
  );
};

export default MainRequestBoard;

const RequestBox = styled.div`
  width: 100%;
  margin-bottom: 150px;
`;

const Hr = styled.hr`
  margin-bottom: 0;
`;
