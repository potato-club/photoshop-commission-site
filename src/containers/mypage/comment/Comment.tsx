import { Typography } from 'src/components/Typography';
import * as S from './Comment.style';
import { MyPageLayout } from '../components/MyPageLayout';
import { CommentList } from './components/CommentList';
import { commentsDummy } from './dummy/comment';

export const Comment = () => {
  return (
    <MyPageLayout>
      <S.Container>
        <S.HeaderWrapper>
          <Typography size="16" fontWeight="bold">
            내가 쓴 댓글
          </Typography>

          <Typography size="16" color="blue" fontWeight="bold">
            ({commentsDummy.count})
          </Typography>
        </S.HeaderWrapper>
        <CommentList list={commentsDummy.list} />
      </S.Container>
    </MyPageLayout>
  );
};
