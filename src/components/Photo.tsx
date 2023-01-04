import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { IData } from 'src/containers/mainPage/components/MainRequestBoard';
import { imageOpenType } from 'src/types/imageOpen.type';
import { useRouter } from 'next/router';

interface IPhoto {
  id: number;
  image: IData['image'];
  imageOpen: imageOpenType;
}

const Photo = ({ id, image, imageOpen }: IPhoto) => {
  const router = useRouter();
  return (
    <PhotoBox onClick={() => router.push(`/detail/${id}`)}>
          <NewImage
            src={
              imageOpen === imageOpenType.open && image
                ? image[0].fileUrl
                : '../../image92.png'
            }
            layout='fill'
            alt="비공개"
          />
    </PhotoBox>
  );
};

export default Photo;

const PhotoBox = styled.div`
  width: 100%;
  aspect-ratio: 1;
  position: relative;
`;

const NewImage = styled(Image)`
  border-radius: 20px;
`;
