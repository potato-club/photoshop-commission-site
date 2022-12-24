import { imageOpenType } from 'src/types/imageOpen.type';

export type MyPost = {
  createdDate: string;
  id: number;
  image: ImageFile[];

  imageOpen: imageOpenType;
  nickname: string;
  questEnum: string;
  title: string;
};

export type ImageFile = {
  fileName: string;
  fileUrl: string;
};
