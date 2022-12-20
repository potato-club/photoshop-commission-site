import { CustomPagination } from 'src/components';
import { Typography } from 'src/components/Typography';
import styled from 'styled-components';

import { MyPageLayout } from '../components/MyPageLayout';
import { CommentList } from './components/CommentList';
import { useRate } from './Rate.hook';

export const Rate = () => {
  const { isError, isLoading, grade, page, offset, list, handleChangePage } =
    useRate();

  return (
    <MyPageLayout>
      <Container>
        <RateContainer>
          <RateDataWrapper>
            <Typography size="48" fontWeight="bold" color="blue">
              {grade}
            </Typography>
          </RateDataWrapper>
          <RatePerWrapper>
            <Typography size="32">/ 5.0</Typography>
          </RatePerWrapper>
        </RateContainer>
        <ClearQuestContainer>
          <ClearTextWrapper>
            <Typography size="16">의뢰 해결 건 수</Typography>
          </ClearTextWrapper>
          <ClearDataWrapper>
            <Typography size="20" fontWeight="bold" color="blue">
              {list.length}
            </Typography>
          </ClearDataWrapper>
        </ClearQuestContainer>
        <CommentList list={list} isLoading={isLoading} isError={isError} />
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
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;

const RateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 52px;
`;

const RateDataWrapper = styled.div`
  margin-right: 20px;
`;

const RatePerWrapper = styled.div``;

const ClearQuestContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 60px;
`;

const ClearTextWrapper = styled.div`
  margin-right: 12px;
`;
const ClearDataWrapper = styled.div``;
