import { CommentType } from './comments.type';
import { ImageType } from './image.type';
import { imageOpenType } from './imageOpen.type';

export type BoardType = {
  boardNo: number;
  title: string;
  state: string;
  writer: string;
  createdDate: string;
  modifiedDate: string;
  imageUrls: ImageType[];
  imageOpen: imageOpenType;
  contents: string;
  totalComment: number;
  commentList: CommentType[];
};
