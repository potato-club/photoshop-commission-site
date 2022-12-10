import { Typography } from 'src/components/Typography';
import { MyPageLayout } from '../components/MyPageLayout';
import { CommentList } from './components/CommentList';
import { commentsDummy } from './dummy/comment';
import styled from 'styled-components';
import { customColor } from 'src/constants';

export const Comment = () => {
  return (
    <MyPageLayout>
      <Container>
        <HeaderWrapper>
          <Typography size="16" fontWeight="bold">
            내가 쓴 댓글
          </Typography>

          <Typography size="16" color="blue" fontWeight="bold">
            ({commentsDummy.count})
          </Typography>
        </HeaderWrapper>
        <CommentList list={commentsDummy.list} />
      </Container>
    </MyPageLayout>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 12px;
  border-bottom: 1px solid ${customColor.gray};
`;
