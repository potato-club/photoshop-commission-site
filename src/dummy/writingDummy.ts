type CommentType = {
  id: number;
  writer: string;
  date: Date;
  text: string;
  good: number;
  reply: ReplyType[];
};

export type ReplyType = {
  id: number;
  writer: string;
  date: Date;
  text: string;
  good: number;
};

export type WritingType = {
  id: number;
  title: string;
  state: string;
  writer: string;
  date: Date;
  imageUrls: string[];
  secret: boolean;
  text: string;
  totalComment: number;
  comments: CommentType[];
};
let id = 1; // 얘는 댓글에 id 주려고 썼는데, 다음 게시글에서 사용할때 초기화 안하고 그냥 썼음 (편의상 한거니까 신경쓸필요 없음!)
let writingId = 1;
let replyId = 1;
export const writingDummy: WritingType[] = [
  {
    id: writingId++,
    title: '부자처럼 나오게 해주세요',
    state: '의뢰중',
    writer: '더미글쓴이',
    date: new Date(2022, 4, 7, 0, 49),
    imageUrls: ['/schedule.jpeg', '/schedule.jpeg'],
    secret: false,
    text: '공강이 하나밖에 없다니.. 편집으로라도 행복해지고 싶습니다 공강 3일 있는것처럼 바꿔주세요..! 아니 그나저나 5월6일이 개교기념일 이였다니 나만 몰랐던건가 ㅋㅋㅋㅋㅋㅋㅋ',
    totalComment: 4,
    comments: [
      {
        id: id++,
        writer: '고잼',
        date: new Date(2022, 4, 7, 3, 50),
        text: '생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 이 글자까지 보였으면 성공',
        good: 20,
        reply: [
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '가나다라마바사',
            good: 1,
          },
        ],
      },
      {
        id: id++,
        writer: '고잼',
        date: new Date(2022, 4, 7, 3, 50),
        text: '딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻',
        good: 2,
        reply: [
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 ',
            good: 2,
          },
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '가나다라마바사',
            good: 3,
          },
        ],
      },
      {
        id: id++,
        writer: '양파먹는소녀',
        date: new Date(2022, 4, 7, 3, 50),
        text: '근데 답글은 어떻게 보여주지',
        good: 12,
        reply: [
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '가나다라마바사',
            good: 4,
          },
        ],
      },
      {
        id: id++,
        writer: '양파먹는소녀',
        date: new Date(2022, 4, 7, 3, 50),
        text: '이 페이지 디자인 회의때 다같이 다시 잡는게 좋을거같기도함. 임의로했다가 디자인 변경사항 생기면 좀 그러니까',
        good: 520,
        reply: [
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '가나다라마바사',
            good: 5,
          },
        ],
      },
    ],
  },
  {
    id: writingId++,
    title: '부자처럼 나오게 해주세요',
    state: '의뢰중',
    writer: '더미글쓴이',
    date: new Date(2022, 4, 7, 0, 49),
    imageUrls: ['/schedule.jpeg', '/schedule.jpeg'],
    secret: true,
    text: '공강이 하나밖에 없다니.. 편집으로라도 행복해지고 싶습니다 공강 3일 있는것처럼 바꿔주세요..! 아니 그나저나 5월6일이 개교기념일 이였다니 나만 몰랐던건가 ㅋㅋㅋㅋㅋㅋㅋ',
    totalComment: 4,
    comments: [
      {
        id: id++,
        writer: '고잼',
        date: new Date(2022, 4, 7, 3, 50),
        text: '생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 이 글자까지 보였으면 성공',
        good: 20,
        reply: [
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '가나다라마바사',
            good: 1,
          },
        ],
      },
      {
        id: id++,
        writer: '고잼',
        date: new Date(2022, 4, 7, 3, 50),
        text: '딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻',
        good: 2,
        reply: [
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 ',
            good: 2,
          },
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '가나다라마바사',
            good: 3,
          },
        ],
      },
      {
        id: id++,
        writer: '양파먹는소녀',
        date: new Date(2022, 4, 7, 3, 50),
        text: '근데 답글은 어떻게 보여주지',
        good: 12,
        reply: [
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '가나다라마바사',
            good: 4,
          },
        ],
      },
      {
        id: id++,
        writer: '양파먹는소녀',
        date: new Date(2022, 4, 7, 3, 50),
        text: '이 페이지 디자인 회의때 다같이 다시 잡는게 좋을거같기도함. 임의로했다가 디자인 변경사항 생기면 좀 그러니까',
        good: 520,
        reply: [
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '가나다라마바사',
            good: 5,
          },
        ],
      },
    ],
  },
  {
    id: writingId++,
    title: '부자처럼 나오게 해주세요',
    state: '의뢰중',
    writer: '더미글쓴이',
    date: new Date(2022, 4, 7, 0, 49),
    imageUrls: ['/schedule.jpeg', '/schedule.jpeg'],
    secret: false,
    text: '공강이 하나밖에 없다니.. 편집으로라도 행복해지고 싶습니다 공강 3일 있는것처럼 바꿔주세요..! 아니 그나저나 5월6일이 개교기념일 이였다니 나만 몰랐던건가 ㅋㅋㅋㅋㅋㅋㅋ',
    totalComment: 4,
    comments: [
      {
        id: id++,
        writer: '고잼',
        date: new Date(2022, 4, 7, 3, 50),
        text: '생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 이 글자까지 보였으면 성공',
        good: 20,
        reply: [
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '가나다라마바사',
            good: 1,
          },
        ],
      },
      {
        id: id++,
        writer: '고잼',
        date: new Date(2022, 4, 7, 3, 50),
        text: '딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻',
        good: 2,
        reply: [
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 ',
            good: 2,
          },
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '가나다라마바사',
            good: 3,
          },
        ],
      },
      {
        id: id++,
        writer: '양파먹는소녀',
        date: new Date(2022, 4, 7, 3, 50),
        text: '근데 답글은 어떻게 보여주지',
        good: 12,
        reply: [
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '가나다라마바사',
            good: 4,
          },
        ],
      },
      {
        id: id++,
        writer: '양파먹는소녀',
        date: new Date(2022, 4, 7, 3, 50),
        text: '이 페이지 디자인 회의때 다같이 다시 잡는게 좋을거같기도함. 임의로했다가 디자인 변경사항 생기면 좀 그러니까',
        good: 520,
        reply: [
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '가나다라마바사',
            good: 5,
          },
        ],
      },
    ],
  },
  {
    id: writingId++,
    title: '부자처럼 나오게 해주세요',
    state: '의뢰중',
    writer: '더미글쓴이',
    date: new Date(2022, 4, 7, 0, 49),
    imageUrls: ['/schedule.jpeg', '/schedule.jpeg'],
    secret: false,
    text: '공강이 하나밖에 없다니.. 편집으로라도 행복해지고 싶습니다 공강 3일 있는것처럼 바꿔주세요..! 아니 그나저나 5월6일이 개교기념일 이였다니 나만 몰랐던건가 ㅋㅋㅋㅋㅋㅋㅋ',
    totalComment: 4,
    comments: [
      {
        id: id++,
        writer: '고잼',
        date: new Date(2022, 4, 7, 3, 50),
        text: '생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 이 글자까지 보였으면 성공',
        good: 20,
        reply: [
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '가나다라마바사',
            good: 1,
          },
        ],
      },
      {
        id: id++,
        writer: '고잼',
        date: new Date(2022, 4, 7, 3, 50),
        text: '딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻',
        good: 2,
        reply: [
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 ',
            good: 2,
          },
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '가나다라마바사',
            good: 3,
          },
        ],
      },
      {
        id: id++,
        writer: '양파먹는소녀',
        date: new Date(2022, 4, 7, 3, 50),
        text: '근데 답글은 어떻게 보여주지',
        good: 12,
        reply: [
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '가나다라마바사',
            good: 4,
          },
        ],
      },
      {
        id: id++,
        writer: '양파먹는소녀',
        date: new Date(2022, 4, 7, 3, 50),
        text: '이 페이지 디자인 회의때 다같이 다시 잡는게 좋을거같기도함. 임의로했다가 디자인 변경사항 생기면 좀 그러니까',
        good: 520,
        reply: [
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '가나다라마바사',
            good: 5,
          },
        ],
      },
    ],
  },
  {
    id: writingId++,
    title: '부자처럼 나오게 해주세요',
    state: '의뢰중',
    writer: '더미글쓴이',
    date: new Date(2022, 4, 7, 0, 49),
    imageUrls: ['/schedule.jpeg', '/schedule.jpeg'],
    secret: false,
    text: '공강이 하나밖에 없다니.. 편집으로라도 행복해지고 싶습니다 공강 3일 있는것처럼 바꿔주세요..! 아니 그나저나 5월6일이 개교기념일 이였다니 나만 몰랐던건가 ㅋㅋㅋㅋㅋㅋㅋ',
    totalComment: 4,
    comments: [
      {
        id: id++,
        writer: '고잼',
        date: new Date(2022, 4, 7, 3, 50),
        text: '생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 이 글자까지 보였으면 성공',
        good: 20,
        reply: [
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '가나다라마바사',
            good: 1,
          },
        ],
      },
      {
        id: id++,
        writer: '고잼',
        date: new Date(2022, 4, 7, 3, 50),
        text: '딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻',
        good: 2,
        reply: [
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 ',
            good: 2,
          },
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '가나다라마바사',
            good: 3,
          },
        ],
      },
      {
        id: id++,
        writer: '양파먹는소녀',
        date: new Date(2022, 4, 7, 3, 50),
        text: '근데 답글은 어떻게 보여주지',
        good: 12,
        reply: [
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '가나다라마바사',
            good: 4,
          },
        ],
      },
      {
        id: id++,
        writer: '양파먹는소녀',
        date: new Date(2022, 4, 7, 3, 50),
        text: '이 페이지 디자인 회의때 다같이 다시 잡는게 좋을거같기도함. 임의로했다가 디자인 변경사항 생기면 좀 그러니까',
        good: 520,
        reply: [
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '가나다라마바사',
            good: 5,
          },
        ],
      },
    ],
  },
  {
    id: writingId++,
    title: '부자처럼 나오게 해주세요',
    state: '의뢰중',
    writer: '더미글쓴이',
    date: new Date(2022, 4, 7, 0, 49),
    imageUrls: ['/schedule.jpeg', '/schedule.jpeg'],
    secret: false,
    text: '공강이 하나밖에 없다니.. 편집으로라도 행복해지고 싶습니다 공강 3일 있는것처럼 바꿔주세요..! 아니 그나저나 5월6일이 개교기념일 이였다니 나만 몰랐던건가 ㅋㅋㅋㅋㅋㅋㅋ',
    totalComment: 4,
    comments: [
      {
        id: id++,
        writer: '고잼',
        date: new Date(2022, 4, 7, 3, 50),
        text: '생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 이 글자까지 보였으면 성공',
        good: 20,
        reply: [
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '가나다라마바사',
            good: 1,
          },
        ],
      },
      {
        id: id++,
        writer: '고잼',
        date: new Date(2022, 4, 7, 3, 50),
        text: '딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻',
        good: 2,
        reply: [
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 ',
            good: 2,
          },
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '가나다라마바사',
            good: 3,
          },
        ],
      },
      {
        id: id++,
        writer: '양파먹는소녀',
        date: new Date(2022, 4, 7, 3, 50),
        text: '근데 답글은 어떻게 보여주지',
        good: 12,
        reply: [
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '가나다라마바사',
            good: 4,
          },
        ],
      },
      {
        id: id++,
        writer: '양파먹는소녀',
        date: new Date(2022, 4, 7, 3, 50),
        text: '이 페이지 디자인 회의때 다같이 다시 잡는게 좋을거같기도함. 임의로했다가 디자인 변경사항 생기면 좀 그러니까',
        good: 520,
        reply: [
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '가나다라마바사',
            good: 5,
          },
        ],
      },
    ],
  },
  {
    id: writingId++,
    title: '부자처럼 나오게 해주세요',
    state: '의뢰중',
    writer: '더미글쓴이',
    date: new Date(2022, 4, 7, 0, 49),
    imageUrls: ['/schedule.jpeg', '/schedule.jpeg'],
    secret: false,
    text: '공강이 하나밖에 없다니.. 편집으로라도 행복해지고 싶습니다 공강 3일 있는것처럼 바꿔주세요..! 아니 그나저나 5월6일이 개교기념일 이였다니 나만 몰랐던건가 ㅋㅋㅋㅋㅋㅋㅋ',
    totalComment: 4,
    comments: [
      {
        id: id++,
        writer: '고잼',
        date: new Date(2022, 4, 7, 3, 50),
        text: '생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 이 글자까지 보였으면 성공',
        good: 20,
        reply: [
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '가나다라마바사',
            good: 1,
          },
        ],
      },
      {
        id: id++,
        writer: '고잼',
        date: new Date(2022, 4, 7, 3, 50),
        text: '딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻',
        good: 2,
        reply: [
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 ',
            good: 2,
          },
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '가나다라마바사',
            good: 3,
          },
        ],
      },
      {
        id: id++,
        writer: '양파먹는소녀',
        date: new Date(2022, 4, 7, 3, 50),
        text: '근데 답글은 어떻게 보여주지',
        good: 12,
        reply: [
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '가나다라마바사',
            good: 4,
          },
        ],
      },
      {
        id: id++,
        writer: '양파먹는소녀',
        date: new Date(2022, 4, 7, 3, 50),
        text: '이 페이지 디자인 회의때 다같이 다시 잡는게 좋을거같기도함. 임의로했다가 디자인 변경사항 생기면 좀 그러니까',
        good: 520,
        reply: [
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '가나다라마바사',
            good: 5,
          },
        ],
      },
    ],
  },
  {
    id: writingId++,
    title: '부자처럼 나오게 해주세요',
    state: '의뢰중',
    writer: '더미글쓴이',
    date: new Date(2022, 4, 7, 0, 49),
    imageUrls: ['/schedule.jpeg', '/schedule.jpeg'],
    secret: false,
    text: '공강이 하나밖에 없다니.. 편집으로라도 행복해지고 싶습니다 공강 3일 있는것처럼 바꿔주세요..! 아니 그나저나 5월6일이 개교기념일 이였다니 나만 몰랐던건가 ㅋㅋㅋㅋㅋㅋㅋ',
    totalComment: 4,
    comments: [
      {
        id: id++,
        writer: '고잼',
        date: new Date(2022, 4, 7, 3, 50),
        text: '생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 이 글자까지 보였으면 성공',
        good: 20,
        reply: [
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '가나다라마바사',
            good: 1,
          },
        ],
      },
      {
        id: id++,
        writer: '고잼',
        date: new Date(2022, 4, 7, 3, 50),
        text: '딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻',
        good: 2,
        reply: [
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 ',
            good: 2,
          },
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '가나다라마바사',
            good: 3,
          },
        ],
      },
      {
        id: id++,
        writer: '양파먹는소녀',
        date: new Date(2022, 4, 7, 3, 50),
        text: '근데 답글은 어떻게 보여주지',
        good: 12,
        reply: [
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '가나다라마바사',
            good: 4,
          },
        ],
      },
      {
        id: id++,
        writer: '양파먹는소녀',
        date: new Date(2022, 4, 7, 3, 50),
        text: '이 페이지 디자인 회의때 다같이 다시 잡는게 좋을거같기도함. 임의로했다가 디자인 변경사항 생기면 좀 그러니까',
        good: 520,
        reply: [
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '가나다라마바사',
            good: 5,
          },
        ],
      },
    ],
  },
  {
    id: writingId++,
    title: '부자처럼 나오게 해주세요',
    state: '의뢰중',
    writer: '더미글쓴이',
    date: new Date(2022, 4, 7, 0, 49),
    imageUrls: ['/schedule.jpeg', '/schedule.jpeg'],
    secret: false,
    text: '공강이 하나밖에 없다니.. 편집으로라도 행복해지고 싶습니다 공강 3일 있는것처럼 바꿔주세요..! 아니 그나저나 5월6일이 개교기념일 이였다니 나만 몰랐던건가 ㅋㅋㅋㅋㅋㅋㅋ',
    totalComment: 4,
    comments: [
      {
        id: id++,
        writer: '고잼',
        date: new Date(2022, 4, 7, 3, 50),
        text: '생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 이 글자까지 보였으면 성공',
        good: 20,
        reply: [
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '가나다라마바사',
            good: 1,
          },
        ],
      },
      {
        id: id++,
        writer: '고잼',
        date: new Date(2022, 4, 7, 3, 50),
        text: '딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻',
        good: 2,
        reply: [
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 ',
            good: 2,
          },
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '가나다라마바사',
            good: 3,
          },
        ],
      },
      {
        id: id++,
        writer: '양파먹는소녀',
        date: new Date(2022, 4, 7, 3, 50),
        text: '근데 답글은 어떻게 보여주지',
        good: 12,
        reply: [
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '가나다라마바사',
            good: 4,
          },
        ],
      },
      {
        id: id++,
        writer: '양파먹는소녀',
        date: new Date(2022, 4, 7, 3, 50),
        text: '이 페이지 디자인 회의때 다같이 다시 잡는게 좋을거같기도함. 임의로했다가 디자인 변경사항 생기면 좀 그러니까',
        good: 520,
        reply: [
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '가나다라마바사',
            good: 5,
          },
        ],
      },
    ],
  },
  {
    id: writingId++,
    title: '부자처럼 나오게 해주세요',
    state: '의뢰중',
    writer: '더미글쓴이',
    date: new Date(2022, 4, 7, 0, 49),
    imageUrls: ['/schedule.jpeg', '/schedule.jpeg'],
    secret: false,
    text: '공강이 하나밖에 없다니.. 편집으로라도 행복해지고 싶습니다 공강 3일 있는것처럼 바꿔주세요..! 아니 그나저나 5월6일이 개교기념일 이였다니 나만 몰랐던건가 ㅋㅋㅋㅋㅋㅋㅋ',
    totalComment: 4,
    comments: [
      {
        id: id++,
        writer: '고잼',
        date: new Date(2022, 4, 7, 3, 50),
        text: '생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 이 글자까지 보였으면 성공',
        good: 20,
        reply: [
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '가나다라마바사',
            good: 1,
          },
        ],
      },
      {
        id: id++,
        writer: '고잼',
        date: new Date(2022, 4, 7, 3, 50),
        text: '딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻게 될까딱 150자면 어떻',
        good: 2,
        reply: [
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 아아아아아아아생각해보니 펼치기 기능도 구현해야하네 일단 길게 써보자 ',
            good: 2,
          },
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '가나다라마바사',
            good: 3,
          },
        ],
      },
      {
        id: id++,
        writer: '양파먹는소녀',
        date: new Date(2022, 4, 7, 3, 50),
        text: '근데 답글은 어떻게 보여주지',
        good: 12,
        reply: [
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '가나다라마바사',
            good: 4,
          },
        ],
      },
      {
        id: id++,
        writer: '양파먹는소녀',
        date: new Date(2022, 4, 7, 3, 50),
        text: '이 페이지 디자인 회의때 다같이 다시 잡는게 좋을거같기도함. 임의로했다가 디자인 변경사항 생기면 좀 그러니까',
        good: 520,
        reply: [
          {
            id: replyId++,
            writer: '김가나다',
            date: new Date(),
            text: '가나다라마바사',
            good: 5,
          },
        ],
      },
    ],
  },
];