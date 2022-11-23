import React, { useState } from 'react';
import { Typography } from 'src/components/Typography';
import { customColor } from 'src/constants';
import styled from 'styled-components';
import { formatDate } from 'src/utils/formatDate';
import { CustomInput } from './CustomInput';
import { ReplyType } from 'src/types/comments.type';
import { Reply } from './Reply';
import { useTextMoreView } from 'src/hooks';

type Props = {
  writer: string;
  createdDate: string;
  modifiedDate: string;
  text: string;
  reply?: ReplyType[];
};
export function Comment({ writer, createdDate, modifiedDate, text, reply }: Props) {
  const { sliceText, onClickMore, showToggle, toggleText } = useTextMoreView({
    text,
  });
  const [openInput, setOpenInput] = useState<boolean>(false);

  return (
    <Container>
      <CommentWrapper>
        <div style={{ display: 'flex' }}>
          <WriterWrapper>
            <Typography size="16" fontWeight="bold">
              {writer}
            </Typography>
          </WriterWrapper>
          <ContentsWrapper>
            <Typography size="16" fontHeight="1.2">
              {sliceText()}
              {showToggle && (
                <MoreView onClick={() => onClickMore()}>
                  <Typography size="12" color="gray">
                    {toggleText}
                  </Typography>
                </MoreView>
              )}
            </Typography>
            <ReactionContainer onClick={() => setOpenInput(!openInput)}>
              <Typography size="12" fontWeight="bold" color="gray">
                답글쓰기
              </Typography>
            </ReactionContainer>
          </ContentsWrapper>
        </div>

        <DateWrapper>
          <Typography size="12">{formatDate(modifiedDate)}</Typography>
        </DateWrapper>
      </CommentWrapper>

      {openInput && <CustomInput type={'Comment'} />}
      {/* {reply && (
        <ReplyWrapper>
          {reply?.map(data => (
            <Reply
              key={data.replyNo}
              writer={data.writer}
              date={data.date}
              text={data.contents}
            />
          ))}
        </ReplyWrapper>
      )} */}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${customColor.gray};
  padding: 16px 0 20px 12px;
`;

const CommentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const WriterWrapper = styled.div`
  white-space: nowrap;
  min-width: 160px;
`;
const ContentsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  max-width: 800px;
  flex-direction: column;
  flex-wrap: wrap;
`;

const DateWrapper = styled.div`
  white-space: nowrap;
  margin-right: 12px;
`;

const MoreView = styled.div`
  cursor: pointer;
  display: inline-block;
`;

const ReactionContainer = styled.div`
  cursor: pointer;
  white-space: nowrap;
  margin: 20px 0;
`;

const ReplyWrapper = styled.div`
  padding: 20px 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  background-color: ${customColor.gray}40;
  margin-left: 160px;
`;