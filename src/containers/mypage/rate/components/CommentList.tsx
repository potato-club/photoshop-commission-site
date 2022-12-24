import { Typography } from 'src/components/Typography';
import { customColor } from 'src/constants';
import styled from 'styled-components';
import { ErrorMessage } from '../../components/ErrorMessage';
import { LoadingMessage } from '../../components/LoadingMessage';
import { RateReview } from '../hooks/useQueryGetRate';
type Props = {
  list: RateReview[];
  isLoading: boolean;
  isError: boolean;
};

export const CommentList = ({ list, isLoading, isError }: Props) => {
  if (isLoading)
    return (
      <MesssageWrapper>
        <LoadingMessage>평점 리스트를 불러오고 있습니다</LoadingMessage>
      </MesssageWrapper>
    );

  if (isError)
    return (
      <MesssageWrapper>
        <ErrorMessage>평점 리스트를 불러오는데 실패했습니다</ErrorMessage>
      </MesssageWrapper>
    );
  if (list && !isLoading && !isError && list.length === 0)
    return (
      <MesssageWrapper>
        <Typography size="16" fontWeight="bold" color="gray">
          평점 리스트가 없습니다
        </Typography>
      </MesssageWrapper>
    );

  return (
    <Container>
      <HeaderWrapper>
        <Typography size="16" fontWeight="bold">
          후기글
        </Typography>
      </HeaderWrapper>
      <ListContainer>
        {list.map((props, i) => (
          <ItemWrapper key={i}>
            <NameWrapper>
              <Typography size="14">{props.nickname}</Typography>
            </NameWrapper>
            <ContentWrapper>
              <Typography size="14">{props.content}</Typography>
            </ContentWrapper>
            <DateWrapper>
              <Typography size="14">{props.createdDate}</Typography>
            </DateWrapper>
            <RateWrapper>
              <Typography size="14" color="blue" fontWeight="bold">
                {props.grade}
              </Typography>
            </RateWrapper>
          </ItemWrapper>
        ))}
      </ListContainer>
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
  width: 100%;
`;
const HeaderWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid ${customColor.gray};
  padding-bottom: 12px;
  padding-left: 12px;
`;

const ListContainer = styled.div``;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  border-bottom: 1px solid ${customColor.gray};
  :hover {
    background-color: #ebebeb;
  }
`;

const NameWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
`;
const ContentWrapper = styled.div`
  width: 63%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const DateWrapper = styled.div`
  width: 12%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5%;
`;
