type CommentType = {
  id: number;
  Writer: string;
  Date: Date;
  Text: string;
  Good: number;
  Reply: ReplyType[];
};

export type ReplyType = {
  id: number;
  Writer: string;
  Date: Date;
  Text: string;
  Good: number;
};

export type DetailType = {
  Title: string;
  State: string;
  Writer: string;
  Date: Date;
  ImageUrls: string[];
  Text: string;
  TotalComment: number;
  Comments: CommentType[];
};
let id = 1;
let replyId = 1;
export const DetailDummy: DetailType = {
  Title: '부자처럼 나오게 해주세요',
  State: '의뢰중',
  Writer: '더미글쓴이',
  Date: new Date(2022, 4, 7, 0, 49),
  ImageUrls: ['/schedule.jpeg', '/schedule.jpeg'],
  Text: '공강이 하나밖에 없다니.. 편집으로라도 행복해지고 싶습니다 공강 3일 있는것처럼 바꿔주세요..! 아니 그나저나 5월6일이 개교기념일 이였다니 나만 몰랐던건가 ㅋㅋㅋㅋㅋㅋㅋ',
  TotalComment: 4,
  Comments: [
    {
      id: id++,
      Writer: '고잼',
      Date: new Date(2022, 4, 7, 3, 50),
      Text: '생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 이 글자까지 보였으면 성공',
      Good: 20,
      Reply: [
        {
          id: replyId++,
          Writer: '김가나다',
          Date: new Date(),
          Text: '가나다라마바사',
          Good: 1,
        },
      ],
    },
    {
      id: id++,
      Writer: '고잼',
      Date: new Date(2022, 4, 7, 3, 50),
      Text: '딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻',
      Good: 2,
      Reply: [
        {
          id: replyId++,
          Writer: '김가나다',
          Date: new Date(),
          Text: '생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 ',
          Good: 2,
        },
        {
          id: replyId++,
          Writer: '김가나다',
          Date: new Date(),
          Text: '가나다라마바사',
          Good: 3,
        },
      ],
    },
    {
      id: id++,
      Writer: '양파먹는소녀',
      Date: new Date(2022, 4, 7, 3, 50),
      Text: '근데 답글은 어떻게 보여주지',
      Good: 12,
      Reply: [
        {
          id: replyId++,
          Writer: '김가나다',
          Date: new Date(),
          Text: '가나다라마바사',
          Good: 4,
        },
      ],
    },
    {
      id: id++,
      Writer: '양파먹는소녀',
      Date: new Date(2022, 4, 7, 3, 50),
      Text: '이 페이지 디자인 회의때 다같이 다시 잡는게 좋을거같기도함. 임의로했다가 디자인 변경사항 생기면 좀 그러니까',
      Good: 520,
      Reply: [
        {
          id: replyId++,
          Writer: '김가나다',
          Date: new Date(),
          Text: '가나다라마바사',
          Good: 5,
        },
      ],
    },
  ],
};
