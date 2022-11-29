import { CommentType } from './comments.type';
import { ImageType } from './image.type';

export type BoardType = {
  boardNo: number;
  title: string;
  state: string;
  writer: string;
  createdDate: string;
  modifiedDate: string;
  imageUrls: ImageType[];
  imageSecret: boolean; // Todo true 면 비공개, false 면 공개 (공개가 default : false)
  contents: string;
  totalComment: number;
  commentList: CommentType[];
};
