export type MyPost = {
  createdDate: string;
  id: number;
  image: ImageFile[];

  imageOpen: string;
  nickname: string;
  questEnum: string;
  title: string;
};

export type ImageFile = {
  fileName: string;
  fileUrl: string;
};
