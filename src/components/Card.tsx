import styled from 'styled-components';
import { IData } from '../containers/mainPage/components/MainRequestBoard';
import Photo from './Photo';
import Theme from './Theme';
import NameAndDate from './NameAndDate';

export const Card = ({ id, title, image, nickname, imageOpen }: IData) => {
  return (
    <Container>
      <Photo id={id} image={image} imageOpen={imageOpen} />
      <Theme id={id} title={title} />
      <NameAndDate id={id} nickname={nickname} />
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
`;
