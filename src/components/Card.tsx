import { useRouter } from 'next/router';
import styled from 'styled-components';
import { IData } from '../containers/mainPage/components/MainRequestBoard';
import NameAndDate from './NameAndDate';
import Photo from './Photo';
import Theme from './Theme';

export const Card = ({ id, title, image, nickname, imageOpen }: IData) => {
  const router = useRouter();
  return (
    <Container onClick={() => router.push(`/detail/${id}`)}>
      <Photo image={image} imageOpen={imageOpen} />
      <Theme title={title} />
      <NameAndDate nickname={nickname} />
    </Container>
  );
};

export default Card;

const Container = styled.div`
  width: 30%;
  max-width: 240px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
`;
