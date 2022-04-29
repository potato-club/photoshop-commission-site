import bg from '../assets/image/ticket.jpg';
import { Typography } from '../components';
import * as C from './Card.style';
import Link from 'next/link';

type postType = {
  src: string;
  theme: string;
  name: string;
  data: string;
};

export const Card = ({ theme, name, src, data }: postType) => {
  return (
    <C.Container>
      <C.PhotoBox>
        <Link href="/" passHref>
          <C.A>
            <C.NewImage src={bg} width="270px" height="192px" alt="비공개" />
          </C.A>
        </Link>
      </C.PhotoBox>
      <C.ThemeBox>
        <Link href="/" passHref>
          <C.A>
            <Typography size="16" color="black">
              배경 좀 지워주세요
            </Typography>
          </C.A>
        </Link>
      </C.ThemeBox>
      <C.NameDateBox>
        <C.Name>
          <Link href="/" passHref>
            <C.A>
              <Typography size="16" color="blue" fontWeight="900">
                임송재
              </Typography>
            </C.A>
          </Link>
        </C.Name>
        <C.Date>
          <Typography size="16" color="lightBlue" fontWeight="900">
            2022/01/17
          </Typography>
        </C.Date>
      </C.NameDateBox>
    </C.Container>
  );
};

export default Card;
