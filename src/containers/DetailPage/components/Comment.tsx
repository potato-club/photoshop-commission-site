import React, { useState } from 'react';
import { Typography } from 'src/components/Typography';
import { customColor } from 'src/constants';
import styled from 'styled-components';
import { FaThumbsUp } from 'react-icons/fa';
import { formatDate } from 'src/utils/formatDate';
import { CustomInput } from './CustomInput';
import { ReplyType } from 'src/types/comments.type';

type Props = {
  writer: string;
  date: Date;
  text: string;
  type: 'Comment' | 'Reply';
  reply?: ReplyType[];
};
export function Comment({ writer, date, text, type, reply }: Props) {
  // ! 댓글, 대댓글 모두 필요한 로직.
  const limitNumber = 150;
  const [limit, setLimit] = useState(limitNumber);
  const showToggle = text.length >= limit ? true : false;
  const [toggleText, setToggleText] = useState<' ...더보기' | ' 닫기'>(
    ' ...더보기',
  );
  const [openInput, setOpenInput] = useState<boolean>(false);




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
    <Container type={type}>
      <Wrapper type={type}>
        <DateWrapper type={type}>
          <Typography size="12">{formatDate(date)}</Typography>
        </DateWrapper>
        <WriterWrapper>
          <Typography size="16" fontWeight="bold">
            {writer}
          </Typography>
        </WriterWrapper>
        <TextWrapper>
          <Typography size="16">
            {sliceText(text)}
            {showToggle && (
              <CursorPointer onClick={() => onClickMore(text)}>
                <Typography size="12" color="gray">
                  {toggleText}
                </Typography>
              </CursorPointer>
            )}
          </Typography>
        </TextWrapper>
        <ReactionContainer>
          {type === 'Comment' && (
            <CursorPointer onClick={() => setOpenInput(!openInput)}>
              <Typography size="12" fontWeight="bold" color="gray">
                답글쓰기
              </Typography>
            </CursorPointer>
          )}
        </ReactionContainer>
      </Wrapper>
      {openInput && <CustomInput type={'Comment'}/>}
      {reply?.map(data => (
        <Comment
          key={data.replyNo}
          writer={data.writer}
          date={data.date}
          text={data.contents}
          type="Reply"
        />
      ))}
    </Container>
  );
}

type StyleProps = {
  type: 'Comment' | 'Reply';
};
const Container = styled.div<StyleProps>`
  position: relative;
  border-top: ${({ type }) => type === 'Comment' && `1px solid ${customColor.gray}`};
  display: flex;
  flex-direction: column;

`;

type WrapperStyled = {
  type: 'Comment' | 'Reply';
};
const Wrapper = styled.div<WrapperStyled>`
  padding-left: ${({ type }) => type === 'Reply' && '80px'};
  padding: ${({ type }) => type === 'Comment' ? "12px 16px" : "12px 0 12px 92px"};
  position: relative;
`;

const DateWrapper = styled.div<StyleProps>`
  position: absolute;
  right: 16px;
  top : 12px;
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
    max-width: 600px;
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
