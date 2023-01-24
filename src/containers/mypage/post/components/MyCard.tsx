import Link from 'next/link';
import { formatDate } from 'src/utils/formatDate';
import styled from 'styled-components';
import Image from 'next/image';
import { useMemo } from 'react';
import { Typography } from 'src/components';
import { MyPost } from '../types/post.type';
import Photo from 'src/components/Photo';
import Theme from 'src/components/Theme';
import NameAndDate from 'src/components/NameAndDate';

type Props = {
  post: MyPost;
};

export const MyCard = ({ post }: Props) => {
  const theme = useMemo(
    () =>
      post.title.length >= 30
        ? post.title.substring(0, 30) + '...'
        : post.title,
    [post],
  );

  return (
    <Container>
      <Photo image={post.image} imageOpen={post.imageOpen} />
      <Theme title={post.title} />
      <NameAndDate nickname={post.nickname} />
    </Container>
  );
};

const Container = styled.div`
  width: 191px;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 12.25px;
  margin-right: 12.25px;
  margin-bottom: 36px;
  padding: 5px;
  :hover {
    background-color: #e1e1e1;
    border-radius: 10px;
  }
`;

const PhotoBox = styled.div`
  width: 100%;
`;

const NewImage = styled(Image)`
  border-radius: 20px;
`;

const ThemeBox = styled.div`
  width: 100%;
  margin-top: 9px;
  height: 32px;
`;

const NameDateBox = styled.div`
  margin-top: 12px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const A = styled.a`
  text-decoration: none;
`;
