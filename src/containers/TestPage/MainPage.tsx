import type { NextPage } from 'next';
import * as S from './MainPage.style';
import { MainComponents } from './components/MainComponents';

export const MainPage: NextPage = () => {
  return (
    <S.Container>
      <S.Test>hello</S.Test>
      <S.Test2>Test2</S.Test2>
      <MainComponents />
    </S.Container>
  );
};
