import type { NextPage } from 'next';
import { CardList } from '../src/components/index';

const Home: NextPage = () => {
  return <CardList state={'의뢰전'} size={8} />;
};

export default Home;
