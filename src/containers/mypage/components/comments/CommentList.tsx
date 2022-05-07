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
  width: 100%;
`;
const ListWrapper = styled.div`
  min-height: 80px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  border-bottom: 1px solid ${customColor.gray};
`;

const LeftWrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const ContentWrapper = styled.div``;

const BoardWrapper = styled.div`
  margin-top: 10px;
`;

const RightWrapper = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const DateWrapper = styled.div``;
