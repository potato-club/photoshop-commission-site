import { Typography } from 'src/components/Typography';
import { customColor } from 'src/constants';
import { RateCommentType } from 'src/types/comment.type';
import styled from 'styled-components';

type Props = {
  list: RateCommentType[];
};

export const CommentList = ({ list }: Props) => {
  return (
    <Container>
      <HeaderWrapper>
        <Typography size="16" fontWeight="bold">
          후기글
        </Typography>
      </HeaderWrapper>
      <ListContainer>
        {list.map(props => (
          <ItemWrapper key={props.id}>
            <NameWrapper>
              <Typography size="16">{props.name}</Typography>
            </NameWrapper>
            <ContentWrapper>
              <Typography size="16">{props.content}</Typography>
            </ContentWrapper>
            <DateWrapper>
              <Typography size="16">{props.date}</Typography>
            </DateWrapper>
            <RateWrapper>
              <Typography size="16" color="blue" fontWeight="bold">
                {props.rate}
              </Typography>
            </RateWrapper>
          </ItemWrapper>
        ))}
      </ListContainer>
    </Container>
  );
};

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
