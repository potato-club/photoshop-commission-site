export type CommentType = {
  CommentNo: number;
  writer: string;
  date: Date;
  contents: string;
  good: number;
  reply: ReplyType[];
};

export type ReplyType = {
  replyNo: number;
  writer: string;
  date: Date;
  contents: string;
  good: number;
};