import { Typography } from 'src/components/Typography';
import { MyPageLayout } from '../components/MyPageLayout';
import { CommentList } from './components/CommentList';
import { DUMMY_RATE } from './dummy/rate';
import * as S from './Rate.style';

export const Rate = () => {
  return (
    <MyPageLayout>
      <S.Container>
        <S.RateContainer>
          <S.RateDataWrapper>
            <Typography size="48" fontWeight="bold" color="blue">
              {DUMMY_RATE.rate}
            </Typography>
          </S.RateDataWrapper>
          <S.RatePerWrapper>
            <Typography size="32">/ 5.0</Typography>
          </S.RatePerWrapper>
        </S.RateContainer>
        <S.ClearQuestContainer>
          <S.ClearTextWrapper>
            <Typography size="16">의뢰 해결 건 수</Typography>
          </S.ClearTextWrapper>
          <S.ClearDataWrapper>
            <Typography size="20" fontWeight="bold" color="blue">
              {DUMMY_RATE.clear}
            </Typography>
          </S.ClearDataWrapper>
        </S.ClearQuestContainer>
        <CommentList list={DUMMY_RATE.comment} />
      </S.Container>
    </MyPageLayout>
  );
};
