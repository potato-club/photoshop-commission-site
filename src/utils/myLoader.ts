import { ImageConfig } from 'next/dist/server/image-config';

type Props = {
  config: Readonly<ImageConfig>;
  src: string;
  width: number;
  quality?: number;
};
export const myLoader = ({ src, width, quality }: Props) => {
  return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`;
};
