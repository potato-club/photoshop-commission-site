import Link from 'next/link';
import { formatDate } from 'src/utils/formatDate';
import { IDummyList } from 'src/dummy/dummyList';
import styled from 'styled-components';
import Image from 'next/image';
import { useMemo } from 'react';
import { Typography } from 'src/components';

export const MyCard = ({ id, title, writer, date, imageUrls }: IDummyList) => {
  const theme = useMemo(
    () => (title.length >= 30 ? title.substring(0, 30) + '...' : title),
    [title],
  );

  return (
    <Container>
      <PhotoBox>
        <Link href={`/detail/${id}`} passHref>
          <A>
            <NewImage
              src={imageUrls}
              width="191px"
              height="143px"
              alt="비공개"
            />
          </A>
        </Link>
      </PhotoBox>
      <ThemeBox>
        <Link href={`/detail/${id}`} passHref>
          <A>
            <Typography size="14" color="black">
              {theme}
            </Typography>
          </A>
        </Link>
      </ThemeBox>
      <NameDateBox>
        <div>
          <Link href={`/detail/${id}`} passHref>
            <A>
              <Typography size="14" color="blue" fontWeight="900">
                {writer}
              </Typography>
            </A>
          </Link>
        </div>
        <div>
          <Typography size="14" color="lightBlue" fontWeight="900">
            {formatDate(String(date))}
          </Typography>
        </div>
      </NameDateBox>
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
