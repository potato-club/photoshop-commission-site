import { Typography } from 'src/components/Typography';
import { MyPageLayout } from '../components/MyPageLayout';
import { CommentList } from './components/CommentList';
import styled from 'styled-components';
import { customColor } from 'src/constants';
import { useQueryGetMyComment } from './hooks/useQueryGetMyComment';
import { CustomPagination } from 'src/components';
import { usePagination } from '../post/hooks/usePagination';

export const Comment = () => {
  const { page, offset, handleChangePage } = usePagination();

  const { list, isError, isLoading } = useQueryGetMyComment(page);

  return (
    <MyPageLayout>
      <Container>
        <HeaderWrapper>
          <Typography size="16" fontWeight="bold">
            내가 쓴 댓글
          </Typography>

          <Typography size="16" color="blue" fontWeight="bold">
            ({list.length})
          </Typography>
        </HeaderWrapper>
        <CommentList list={list} isError={isError} isLoading={isLoading} />
        {list.length !== 0 && (
          <CustomPagination
            activePage={page}
            onChange={handleChangePage}
            totalItemsCount={list.length}
          />
        )}
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
