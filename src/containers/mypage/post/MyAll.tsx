import Link from 'next/link';
import { pathName } from 'src/constants/pathName';
import { Typography } from 'src/components';
import { dummyList } from 'src/dummy/dummyList';
import styled from 'styled-components';
import { MyPageLayout } from '../components/MyPageLayout';
import { MyCardList } from './components/MyCardList';
import { useQueryMyPostBefore } from './hooks/useQueryMyPostBefore';
import { MyPost } from './types/post.type';
import { useQueryMyPostComplete } from './hooks/useQueryMyPostComplete';
import { useQueryMyPostRequesting } from './hooks/useQueryMyPostRequesting';
import { LoadingMessage } from '../components/LoadingMessage';
import { ErrorMessage } from '../components/ErrorMessage';

type RequestBoardProps = {
  state: 'before' | 'requesting' | 'complete';
  list: MyPost[];
  isLoading: boolean;
  isError: boolean;
};

const BEFORE = 'before';
const REQUESTING = 'requesting';
const COMPLETE = 'complete';

const LIMIT_LENGTH = 4;

export const MyAll = () => {
  const {
    list: listBefore,
    isError: isErrorBefore,
    isLoading: isLoadingBefore,
  } = useQueryMyPostBefore();
  const {
    list: listComplete,
    isError: isErrorComplete,
    isLoading: isLoadingComplete,
  } = useQueryMyPostComplete();
  const {
    list: listRequesting,
    isError: isErrorRequesting,
    isLoading: isLoadingRequesting,
  } = useQueryMyPostRequesting();

  return (
    <MyPageLayout>
      <Container>
        <RequestBoard
          state={BEFORE}
          list={listBefore}
          isLoading={isLoadingBefore}
          isError={isErrorBefore}
        />
        <RequestBoard
          state={REQUESTING}
          list={listRequesting}
          isLoading={isLoadingRequesting}
          isError={isErrorRequesting}
        />
        <RequestBoard
          state={COMPLETE}
          list={listComplete}
          isLoading={isLoadingComplete}
          isError={isErrorComplete}
        />
      </Container>
    </MyPageLayout>
  );
};

const RequestBoard = ({
  state,
  list,
  isLoading,
  isError,
}: RequestBoardProps) => {
  return (
    <RequestBox>
      <Title>
        <Typography size="24" fontWeight="bold">
          {state === BEFORE && '의뢰전'}
          {state === REQUESTING && '의뢰중'}
          {state === COMPLETE && '의뢰완료'}
        </Typography>
        <Plus>
          <Link href={`/mypage/post/${state}`} passHref>
            <A>
              <Typography size="16" fontWeight="bold">
                더보기
              </Typography>
            </A>
          </Link>
        </Plus>
      </Title>
      <Hr />

      {isLoading && (
        <MesssageWrapper>
          <LoadingMessage>게시글을 불러오고 있습니다</LoadingMessage>
        </MesssageWrapper>
      )}
      {isError && (
        <MesssageWrapper>
          <ErrorMessage>게시글을 불러오는데 실패했습니다</ErrorMessage>
        </MesssageWrapper>
      )}
      {!isLoading && !isError && list.length === 0 && (
        <MesssageWrapper>
          <Typography size="16" fontWeight="bold">
            게시글이 없습니다
          </Typography>
        </MesssageWrapper>
      )}
      {list.length !== 0 && (
        <MyCardList list={list} offset={0} limit={LIMIT_LENGTH} />
      )}
    </RequestBox>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const RequestBox = styled.div`
  width: 100%;
  margin-bottom: 80px;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
`;

const Plus = styled.span`
  text-decoration: none;
  margin: 0px 15px 0 0;
  :hover {
    cursor: pointer;
  }
`;
const Hr = styled.hr`
  margin-bottom: 0;
`;

const A = styled.a`
  text-decoration: none;
  text-align: center;
`;

const MesssageWrapper = styled.div`
  width: 100%;
  padding-top: 80px;
`;
