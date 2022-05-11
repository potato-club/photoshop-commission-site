import React, { useState } from 'react';
import { Typography } from 'src/components/Typography';
import { customColor } from 'src/constants';
import styled from 'styled-components';
import { FaThumbsUp } from 'react-icons/fa';
import { ReplyType } from 'src/dummy/detailDummy';
import { formatDate } from 'src/utils/formatDate';
type Props = {
  Writer: string;
  Date: Date;
  Text: string;
  Good: number;
  type: 'Comment' | 'Reply';
  Reply?: ReplyType[];
};
export function CommentTest({ Writer, Date, Text, Good, Reply }: Props) {
  const limitNumber = 150;
  const [limit, setLimit] = useState(limitNumber);
  const showToggle = Text.length >= limit ? true : false;
  const [toggleText, setToggleText] = useState<' ...더보기' | ' 닫기'>(
    ' ...더보기',
  );

  // Todo API 에서 클릭했는지 정보를 받아오고, Click 시 체크했는지 여부랑 숫자 변경하는 식으로 구현해야함.`
  // Todo 지금은 useState 로 그냥 디자인만 구현한거임.
  const [likeComment, setLikeComment] = useState<boolean>(false);

  const onClickMore = (str: string) => {
    if (toggleText === ' ...더보기') {
      setLimit(str.length);
      setToggleText(' 닫기');
    } else {
      setLimit(limitNumber);
      setToggleText(' ...더보기');
    }
  };

  const sliceText = (str: string) => {
    return str.slice(0, limit);
  };

  return (
    <Container>
      <DateWrapper>
        <Typography size="12">{formatDate(Date)}</Typography>
      </DateWrapper>
      <WriterWrapper>
        <Typography size="16" fontWeight="bold">
          {Writer}
        </Typography>
      </WriterWrapper>
      <TextWrapper>
        <Typography size="16">
          {sliceText(Text)}
          {showToggle && (
            <CursorPointer onClick={() => onClickMore(Text)}>
              <Typography size="12" color="gray">
                {toggleText}
              </Typography>
            </CursorPointer>
          )}
        </Typography>
      </TextWrapper>
      <ReactionContainer>
        <ReactionWrapper>
          <IConWrapper likeComment={likeComment}>
            <FaThumbsUp
              fontSize={12}
              fill={likeComment ? 'red' : ''}
              onClick={() => setLikeComment(!likeComment)}
            />
          </IConWrapper>
          {Good}
        </ReactionWrapper>
        <CursorPointer>
          <Typography size="12" fontWeight="bold" color="gray">
            답글쓰기
          </Typography>
        </CursorPointer>
      </ReactionContainer>
    </Container>
    
  );
}

const Container = styled.div`
  position: relative;
  padding: 12px 16px;
  border-bottom: 1px solid ${customColor.gray};
  display: flex;
  flex-direction: column;
`;
const DateWrapper = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`;
const WriterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0 4px;
  height: 20px;
`;
const TextWrapper = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: flex-end;
  > :nth-child(1) {
    width: 600px;
    div {
      display: inline;
    }
  }
`;
const CursorPointer = styled.div`
  cursor: pointer;
`;
const ReactionContainer = styled.div`
  margin-top: 8px;
  display: flex;
  gap: 0 30px;
  align-items: flex-end;
  height: 20px;
`;

const ReactionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0 8px;
`;

type IConPros = {
  likeComment: boolean;
};
const IConWrapper = styled.div<IConPros>`
  transform: ${({ likeComment }) => likeComment && 'scale(1.5)'};
  transition: all 300ms ease-in-out;
`;
