import React from 'react';
import styled from 'styled-components';
import CardList from '../../../components/CardList';
import Title from './Title';
import { imageOpenType } from 'src/types/imageOpen.type';
import { useMainData } from '../../../hooks/useMainData';

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
  const { data } = useMainData(state);

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
  min-height: 686px;
`;

const Hr = styled.hr`
  margin: 8px 0;
`;
