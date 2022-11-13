import { Typography } from '../components/index';
import Link from 'next/link';
import { formatDate } from 'src/utils/formatDate';
import { IDummyList } from 'src/dummy/dummyList';
import styled from 'styled-components';
import Image from 'next/image';
import { useMemo } from 'react';
import { IData } from './MainRequestBoard';

export const Card = ({ id, title, createDate, image, nickname }: IData) => {
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
              src="https://photoshopcommission.s3.ap-northeast-2.amazonaws.com/a4f5854e-2af5-436b-bca6-f02314c22fcc-test.jpg"
              width="270px"
              height="192px"
              alt="비공개"
            />
          </A>
        </Link>
      </PhotoBox>
      <ThemeBox>
        <Link href={`/detail/${id}`} passHref>
          <A>
            <Typography size="16" color="black">
              {theme}
            </Typography>
          </A>
        </Link>
      </ThemeBox>
      <NameDateBox>
        <div>
          <Link href={`/detail/${id}`} passHref>
            <A>
              <Typography size="16" color="blue" fontWeight="900">
                {nickname}
              </Typography>
            </A>
          </Link>
        </div>
        <div>
          <Typography size="16" color="lightBlue" fontWeight="900">
            {/* {formatDate(createDate)} */}
          </Typography>
        </div>
      </NameDateBox>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  width: 270px;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 12.25px;
  margin-right: 12.25px;
  margin-bottom: 36px;
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
