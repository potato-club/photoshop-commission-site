export type CommentType = {
  CommentNo: number;
  writer: string;
  date: Date;
  contents: string;
  reply: ReplyType[];
  boardListId: number;
  children: ReplyType[]; // Todo : 백엔드에서 추후 알려주기로함 (ReplyType[])
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