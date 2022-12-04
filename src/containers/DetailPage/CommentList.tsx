import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux-toolkit/store';
import { CommentAndReply } from './components';

export const CommentList = () => {
  const commentList = useSelector(
    (state: RootState) => state.detailData.data.commentList,
  );
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
