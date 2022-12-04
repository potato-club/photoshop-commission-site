import { Typography } from 'src/components/Typography';
import { customColor } from 'src/constants';
import styled from 'styled-components';

type Props = {
  list: { id: number; content: string; Board: string; date: string }[];
};

export const CommentList = ({ list }: Props) => {
  return (
    <Container>
      {list.map(data => (
        <ListWrapper key={data.id}>
          <LeftWrapper>
            <ContentWrapper>
              <Typography size="16">{data.content}</Typography>
            </ContentWrapper>
            <BoardWrapper>
              <Typography size="16" color="gray">
                {data.Board}
              </Typography>
            </BoardWrapper>
          </LeftWrapper>
          <RightWrapper>
            <DateWrapper>
              <Typography size="16">{data.date}</Typography>
            </DateWrapper>
          </RightWrapper>
        </ListWrapper>
      ))}
    </Container>
  );
};

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
  width: 100%;
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
