export interface CommentType {
  id: number;
  name: string;
  content: string;
  date: string;
}

export interface RateCommentType extends CommentType {
  rate: number;
}
