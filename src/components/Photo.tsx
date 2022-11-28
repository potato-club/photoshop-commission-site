import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { IData } from 'src/containers/mainPage/components/MainRequestBoard';

interface IPhoto {
  id: number;
  image: IData['image'];
  imageOpen: boolean;
}

const Photo = ({ id, image, imageOpen }: IPhoto) => {
  return (
    <PhotoBox>
      <Link href={`/detail/${id}`} passHref>
        <a>
          <NewImage
            src={imageOpen && image ? image[0].fileUrl : '/image92.png'}
            width="270px"
            height="192px"
            alt="비공개"
          />
        </a>
      </Link>
    </PhotoBox>
  );
};

export default Photo;

const PhotoBox = styled.div`
  width: 100%;
`;

const NewImage = styled(Image)`
  border-radius: 20px;
`;
