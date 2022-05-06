import React from 'react';
import { Typography } from 'src/components/Typography';
import { customColor } from 'src/constants';
import styled from 'styled-components';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { ReplyType } from 'src/dummy/detailDummy';
type Props = {
  Writer: string;
  Date: Date;
  Text: string;
  good: number;
  bad: number;
  reply: ReplyType[];
};
export function Comment({ Writer, Date, Text, good, bad, reply }: Props) {
  return (
    <CommentWrapper>
      <DateWrapper>
        <Typography size="12">2022-03-18</Typography>
      </DateWrapper>
      <WriterWrapper>
        <Typography size="16" fontWeight="bold">
          {Writer}
        </Typography>
        <Typography size="12" color="gray">
          {/* {Date} */}
        </Typography>
      </WriterWrapper>
      <Contents>
        <Typography size="16">{Text}</Typography>
      </Contents>
      <Reply>
        <FaThumbsUp fontSize={12} />
        <FaThumbsDown fontSize={12} />
        <Typography size="12">답글쓰기</Typography>
      </Reply>
    </CommentWrapper>
  );
}

const CommentWrapper = styled.div`
  position: relative;
  height: 120px;
  padding: 12px 16px;
  border-bottom: 1px solid ${customColor.gray};
  display: flex;
  flex-direction: column;
  gap: 16px 0;
`;
const DateWrapper = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`;
const WriterWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0 4px;
`;
const Contents = styled.div`
  width: 640px;
`;

const Reply = styled.div`
  display: flex;
  gap: 0 30px;
  align-items: center;
`;
