import { CommentType } from './comments.type';
import { ImageType } from './image.type';

export type BoardType = {
  boardNo: number;
  title: string;
  state: string;
  writer: string;
  date: Date;
  imageUrls: ImageType[];
  imageSecret: boolean; // true 면 비공개, false 면 공개 (공개가 default)
  contents: string;
  totalComment: number;
  commentList: CommentType[]; // 얘는 백엔드에서 작업해보고 추 후 알려주겠다고 함.
};
