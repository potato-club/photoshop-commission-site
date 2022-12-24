export type CommentType = {
  CommentNo: number;
  writer: string;
  date: Date;
  contents: string;
  reply: ReplyType[];
  boardListId: number;
  children: ReplyType[];
  comment: string;
  createdDate: string;
  modifiedDate: string;
  id: number;
  nickname: string;
  parent: boolean;
};

export type ReplyType = {
  comment: string;
  createdDate: string;
  modifiedDate: string;
  id: number;
  nickname: string;
};