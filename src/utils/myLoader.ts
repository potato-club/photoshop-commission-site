import { ImageConfig } from 'next/dist/server/image-config';

type Props = {
  config: Readonly<ImageConfig>;
  src: string;
  width: number;
  quality?: number;
};
export const myLoader = ({ src, width, quality }: Props) => {
  return `${process.env.NEXT_PUBLIC_FRONT_URI}/${src}?w=${width}&q=${quality || 75}`;
};
