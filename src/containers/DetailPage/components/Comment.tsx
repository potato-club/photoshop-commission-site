import React from 'react'
import { Typography } from 'src/components/Typography';
import { customColor } from 'src/constants';
import styled from 'styled-components';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

export function Comment() {
  return (
    <CommentWrapper>
      <Date>
        <Typography size='12'>2022-03-18</Typography>
      </Date>
      <Writer>
        <Typography size="16" fontWeight="bold">
          고잼
        </Typography>
        <Typography size="12" color="gray">
          25분전
        </Typography>
      </Writer>
      <Contents>
        <Typography size="16">
          일단은 더미데이터말고 디자인틀만 짜놨습니다
          <br />
          더마데이터로 구성하는건 틀 짜놓고 다시 구현하겠습니다~
        </Typography>
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
const Date = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`;
const Writer = styled.div`
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