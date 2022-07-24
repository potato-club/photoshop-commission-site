import bg from '../assets/image/ticket.jpg';
import { Typography } from '../components/index';
import * as C from './Card.style';
import Link from 'next/link';
import { formatDate } from 'src/utils/formatDate';

type postType = {
  src: string;
  theme: string;
  name: string;
  date: Date;
  id: number;
};

export const Card = ({ theme, name, src, date, id }: postType) => {
  const exImg = bg;

  return (
    <C.Container>
      <C.PhotoBox>
        <Link href={`/detail/${id}`} passHref>
          <C.A>
            <C.NewImage src={exImg} width="270px" height="192px" alt="비공개" />
          </C.A>
        </Link>
      </C.PhotoBox>
      <C.ThemeBox>
        <Link href={`/detail/${id}`} passHref>
          <C.A>
            <Typography size="16" color="black">
              {theme.length >= 30 ? theme.substring(0, 30) + '...' : theme}
            </Typography>
          </C.A>
        </Link>
      </C.ThemeBox>
      <C.NameDateBox>
        <C.Name>
          <Link href={`/detail/${id}`} passHref>
            <C.A>
              <Typography size="16" color="blue" fontWeight="900">
                {name}
              </Typography>
            </C.A>
          </Link>
        </C.Name>
        <C.Date>
          <Typography size="16" color="lightBlue" fontWeight="900">
            {formatDate(date)}
          </Typography>
        </C.Date>
      </C.NameDateBox>
    </C.Container>
  );
};

export default Card;
