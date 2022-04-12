import type { NextPage } from 'next';
import * as S from './MainPage.style';
import { MainComponents } from './components/MainComponents';
import { Typography } from 'src/components/Typography';

export const MainPage: NextPage = () => {
  return (
    <S.Container>
      <S.Test>hello</S.Test>
      <S.Test2>Test2</S.Test2>
      <MainComponents />
      <Typography size="16" color="blue">
        hello
      </Typography>
    </S.Container>
  );
};
