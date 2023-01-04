import { isError } from 'react-query';
import { Typography } from 'src/components/Typography';
import { customColor } from 'src/constants';
import styled from 'styled-components';
import { ErrorMessage } from '../../components/ErrorMessage';
import { LoadingMessage } from '../../components/LoadingMessage';
import { MyCommentType } from '../hooks/useQueryGetMyComment';

type Props = {
  list: MyCommentType[];
  isLoading: boolean;
  isError: boolean;
};

export const CommentList = ({ list, isLoading, isError }: Props) => {
  if (isLoading)
    return (
      <MesssageWrapper>
        <LoadingMessage>게시글을 불러오고 있습니다</LoadingMessage>
      </MesssageWrapper>
    );

  if (isError)
    return (
      <MesssageWrapper>
        <ErrorMessage>게시글을 불러오는데 실패했습니다</ErrorMessage>
      </MesssageWrapper>
    );
  if (list && !isLoading && !isError && list.length === 0)
    return (
      <MesssageWrapper>
        <Typography size="16" fontWeight="bold" color="gray">
          게시글이 없습니다
        </Typography>
      </MesssageWrapper>
    );

  return (
    <Container>
      {list.map((data, i) => (
        <ListWrapper key={i}>
          <LeftWrapper>
            <ContentWrapper>
              <Typography size="14">{data.comment}</Typography>
            </ContentWrapper>
            <BoardWrapper>
              <Typography size="14" color="gray">
                {data.title}
              </Typography>
            </BoardWrapper>
          </LeftWrapper>
          <RightWrapper>
            <DateWrapper>
              <Typography size="14">{data.modifiedDate}</Typography>
            </DateWrapper>
          </RightWrapper>
        </ListWrapper>
      ))}
    </Container>
  );
};
const MesssageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 80px;
`;
const Container = styled.div`
  height: 100%;
  width: 100%;
`;
const ListWrapper = styled.div`
  min-height: 80px;
  height: 100%;

  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  border-bottom: 1px solid ${customColor.gray};
  :hover {
    background-color: #ebebeb;
  }
`;

const LeftWrapper = styled.div`
  width: 90%;
  min-height: 80px;

  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  width: 70%;
  height: 60%;
  margin-bottom: 10px;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
  div {
    padding-top: 3px;
    text-overflow: ellipsis;
    height: 70%;
    overflow: hidden;
    white-space: nowrap;
  }
`;

const BoardWrapper = styled.div`
  width: 50%;
  height: 40%;

  div {
    padding-top: 3px;

    text-overflow: ellipsis;
    overflow: hidden;

    white-space: nowrap;
  }
`;

const RightWrapper = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const DateWrapper = styled.div``;
