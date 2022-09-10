export type CommentType = {
  CommentNo: number;
  writer: string;
  date: Date;
  contents: string;
  reply: ReplyType[];
};

export type ReplyType = {
  replyNo: number;
  writer: string;
  date: Date;
  contents: string;
};