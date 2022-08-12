import { boardDummy } from './boardDummy';
export interface IDummyList {
  id: number;
  title: string;
  writer: string;
  date: Date;
  imageUrls: string;
}

export const dummyList = boardDummy.map(boardDummy => {
  const mainPageDummy = {
    id: boardDummy.boardNo,
    title: boardDummy.title,
    writer: boardDummy.writer,
    date: boardDummy.date,
    imageUrls: boardDummy.imageUrls[0],
  };
  return mainPageDummy;
});
