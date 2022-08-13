import { Typography } from 'src/components/Typography';
import { MyPageLayout } from './components/MyPageLayout';
import * as S from './Comment.style';
import { CommentList } from './components/comments/CommentList';
import { commentsDummy } from 'src/dummy/myPage';

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
