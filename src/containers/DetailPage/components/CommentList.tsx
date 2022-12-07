import React from 'react';
import { CommentType } from 'src/types/comments.type';
import { CommentAndReply } from '.';
type Props = {
  commentList: CommentType[];
};
export const CommentList = ({ commentList }: Props) => {
  return (
    <>
      {commentList &&
        commentList.map(comment => (
          <CommentAndReply
            key={comment.id}
            parentId={comment.id}
            writer={comment.nickname}
            createdDate={comment.createdDate}
            modifiedDate={comment.modifiedDate}
            text={comment.comment}
            reply={comment.children}
          />
        ))}
    </>
  );
};
