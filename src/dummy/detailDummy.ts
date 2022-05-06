type CommentType = {
  id: number;
  Writer: string;
  Date: Date;
  Text: string;
  good: number;
  bad: number;
  reply: ReplyType[];
};

export type ReplyType = {
  Writer: string;
  Date: Date;
  Text: string;
};

export type DetailType = {
  Title: string;
  State: string;
  Writer: string;
  Date: Date;
  ImageUrl: string[];
  Text: string;
  TotalComment: number;
  Comments: CommentType[];
};

export const DetailDummy: DetailType = {
  Title: '부자처럼 나오게 해주세요',
  State: '의뢰중',
  Writer: '더미데이터',
  Date: new Date(2022, 4, 7, 0, 49),
  ImageUrl: [''],
  Text: '공강이 하나밖에 없다니.. 편집으로라도 행복해지고 싶습니다 공강 3일 있는것처럼 바꿔주세요..! 아니 그나저나 5월6일이 개교기념일 이였다니 나만 몰랐던건가 ㅋㅋㅋㅋㅋㅋㅋ',
  TotalComment: 4,
  Comments: [
    {
      id: 1,
      Writer: '고잼',
      Date: new Date(2022, 4, 7, 3, 50),
      Text: '생각해보니 펼치기 기능도 구현해야하네',
      good: 2,
      bad: 1,
      reply: [{ Writer: '김가나다', Date: new Date(), Text: '가나다라마바사' }],
    },
    {
      id: 2,
      Writer: '고잼',
      Date: new Date(2022, 4, 7, 3, 50),
      Text: '펼치기 구현은 나중에 해야겠다',
      good: 2,
      bad: 1,
      reply: [
        { Writer: '김가나다', Date: new Date(), Text: '가나다라마바사' },
        { Writer: '김가나다', Date: new Date(), Text: '가나다라마바사' },
      ],
    },
    {
      id: 3,
      Writer: '양파먹는소녀',
      Date: new Date(2022, 4, 7, 3, 50),
      Text: '근데 답글은 어떻게 보여주지',
      good: 2,
      bad: 1,
      reply: [{ Writer: '김가나다', Date: new Date(), Text: '가나다라마바사' }],
    },
    {
      id: 4,
      Writer: '양파먹는소녀',
      Date: new Date(2022, 4, 7, 3, 50),
      Text: '이 페이지 디자인 다시 잡고 개발하는게 나을거같은데',
      good: 2,
      bad: 1,
      reply: [{ Writer: '김가나다', Date: new Date(), Text: '가나다라마바사' }],
    },
  ],
};
