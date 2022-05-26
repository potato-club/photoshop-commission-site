import bg from '../assets/image/ticket.jpg';
import { Typography } from '../components/index';
import * as C from './Card.style';
import Link from 'next/link';

type postType = {
  src: string;
  theme: string;
  name: string;
  data: string;
  date: string;
};

export const Card = ({ theme, name, src, data, date }: postType) => {
  const exImg = bg;
  return (
    <C.Container>
      <C.PhotoBox>
        <Link href="/" passHref>
          <C.A>
            <C.NewImage src={exImg} width="270px" height="192px" alt="비공개" />
          </C.A>
        </Link>
      </C.PhotoBox>
      <C.ThemeBox>
        <Link href="/" passHref>
          <C.A>
            <Typography size="16" color="black">
              {theme}
            </Typography>
          </C.A>
        </Link>
      </C.ThemeBox>
      <C.NameDateBox>
        <C.Name>
          <Link href="/" passHref>
            <C.A>
              <Typography size="16" color="blue" fontWeight="900">
                {name}
              </Typography>
            </C.A>
          </Link>
        </C.Name>
        <C.Date>
          <Typography size="16" color="lightBlue" fontWeight="900">
            {date}
          </Typography>
        </C.Date>
      </C.NameDateBox>
    </C.Container>
  );
};

export default Card;
