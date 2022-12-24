import React from 'react';
import { customColor } from 'src/constants';
import styled from 'styled-components';
import { ReplyType } from 'src/types/comments.type';
import { Reply } from './Reply';
import { Comment } from './Comment';

type Props = {
  writer: string;
  createdDate: string;
  modifiedDate: string;
  text: string;
  reply?: ReplyType[];
  parentId: number;
};
export function CommentAndReply({ writer, createdDate, modifiedDate, text, reply, parentId }: Props) {

  return (
    <Container>
      <Comment writer={writer} createdDate={createdDate} modifiedDate={modifiedDate} text={text} parentId={parentId}/>
      {reply && reply.length !== 0 && (
        <ReplyWrapper>
          {reply?.map(data => (
            <Reply
              key={data.id}
              writer={data.nickname}
              createdDate={data.createdDate}
              modifiedDate={data.modifiedDate}
              text={data.comment}
            />
          ))}
        </ReplyWrapper>
      )}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
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
  padding: 0 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${customColor.gray}40;
  margin-left: 160px;
`;