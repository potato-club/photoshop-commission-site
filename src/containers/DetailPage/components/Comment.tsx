import React, { useState } from 'react';
import { Typography } from 'src/components/Typography';
import { customColor } from 'src/constants';
import styled from 'styled-components';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { ReplyType } from 'src/dummy/detailDummy';
import { formatDate } from 'src/utils/formatDate';
type Props = {
  Writer: string;
  Date: Date;
  Text: string;
  Good: number;
  Bad: number;
  Reply: ReplyType[];
};
const limitText = 150;
export function Comment({ Writer, Date, Text, Good, Bad, Reply }: Props) {
  const [limit, setLimit] = useState(150);
  const toggleMoreView = (str: any, limit: any) => {
    return {
      string: str.slice(0, limit),
      displayMoreView: str.length > limit,
    };
  };

  const onClickMore = (str: any) => {
    if (toggleMoreView(str, limit).displayMoreView) {
      setLimit(str.length);
    } else setLimit(limitText);
  };

  return (
    <CommentWrapper>
      <DateWrapper>
        <Typography size="12">{formatDate(Date)}</Typography>
      </DateWrapper>
      <WriterWrapper>
        <Typography size="16" fontWeight="bold">
          {Writer}
        </Typography>
        <Typography size="12" color="gray">
          {formatDate(Date)}
        </Typography>
      </WriterWrapper>
      <Contents>
        <TextWrapper>
          <Typography size="16">
            {toggleMoreView(Text, limit).string}
            <ToggleWrapper onClick={() => onClickMore(Text)}>
              {toggleMoreView(Text, limit).displayMoreView ? (
                <Typography size="12" color="gray">
                  ...더보기
                </Typography>
              ) : (
                <Typography size="12" color="gray">
                  닫기
                </Typography>
              )}
            </ToggleWrapper>
          </Typography>
        </TextWrapper>
      </Contents>
      <ReplyWrapper>
        <Reaction>
          <FaThumbsUp fontSize={12} />
          {Good}
        </Reaction>
        <Reaction>
          <FaThumbsDown fontSize={12} />
          {Bad}
        </Reaction>
        <Typography size="12" fontWeight="bold" color="gray">
          답글쓰기
        </Typography>
      </ReplyWrapper>
    </CommentWrapper>
  );
}

const CommentWrapper = styled.div`
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
const Contents = styled.div`
  display: flex;
  align-items: flex-end;
`;
const TextWrapper = styled.div`
  margin-top: 4px;
  display: flex;
  > :nth-child(1) {
    width: 600px;
    div {
      display: inline;
    }
  }
`;
const ToggleWrapper = styled.div``;
const ReplyWrapper = styled.div`
  display: flex;
  gap: 0 30px;
  align-items: flex-end;
  height: 20px;
`;

const Reaction = styled.div`
  display: flex;
  align-items: center;
  gap: 0 8px;
`;
