import { Typography } from 'src/components';
import styled from 'styled-components';
import { ErrorMessage } from '../../components/ErrorMessage';
import { LoadingMessage } from '../../components/LoadingMessage';
import { MyPost } from '../types/post.type';
import { MyCard } from './MyCard';

type Props = {
  offset: number;
  limit: number;
  list: MyPost[];
  isLoading: boolean;
  isError: boolean;
};

export const MyCardList = ({
  list,
  offset,
  limit,
  isLoading,
  isError,
}: Props) => {
  console.log(list);
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
    <CardBox>
      {list.slice(offset, offset + limit).map(cardInfo => (
        <MyCard key={cardInfo.id} post={cardInfo} />
      ))}
    </CardBox>
  );
};
const MesssageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 80px;
`;

const CardBox = styled.div`
  width: 876px;
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: start;
`;
