import { Typography } from 'src/components/Typography';
import { MyPageLayout } from './components/MyPageLayout';
import { CommentList } from './components/rate/CommentList';
import * as S from './Rate.style';

const dummy = {
  rate: 3.2,
  clear: 4,
  comment: [
    {
      id: 1,
      name: '당근먹는기사',
      content: '키아아ㅏ아 ㅏ쥑인다ㅏ아ㅏㅏ',
      date: '2020-03-02',
      rate: 4.2,
    },
    {
      id: 2,
      name: '당근먹는기사2',
      content:
        '키아아ㅏ아 ㅏ쥑인다ㅏ아ㅏㅏ존나길래 글써버리기이ㅣ이이ㅣ ㅣ키ㅑ아아아 이게 데이터 낭비지ㅣ이ㅣㅣ',
      date: '2020-03-02',
      rate: 4.2,
    },
    {
      id: 3,
      name: '당근먹는기사3',
      content: '키아아ㅏ아 ㅏ쥑인다ㅏ아ㅏㅏ',
      date: '2020-03-02',
      rate: 4.2,
    },
  ],
};
export const Rate = () => {
  return (
    <MyPageLayout>
      <S.Container>
        <S.RateContainer>
          <S.RateDataWrapper>
            <Typography size="48" fontWeight="bold" color="blue">
              {dummy.rate}
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
              {dummy.clear}
            </Typography>
          </S.ClearDataWrapper>
        </S.ClearQuestContainer>
        <CommentList list={dummy.comment} />
      </S.Container>
    </MyPageLayout>
  );
};
