
import React from 'react';
import styled from 'styled-components';
import { customColor } from 'src/constants/customColor';
import { Contents, Header, CommentHeader, Comment, CustomInput } from './components';
import { BoardType } from 'src/types/board.type';
type Props = {
  data: BoardType;
};
export function DetailPage({ data }: Props) {
  const {title, state, writer, date, imageUrls, imageSecret, contents, totalComment, commentList} = data;
  return (
    <Container>
      <Wrapper>
        <Header title={title} writer={writer} date={date} state={state} />
        <Contents imageUrls={imageUrls} contents={contents} imageSecret={imageSecret} />
        <CommentContainer>
          <CommentHeader totalComment={totalComment} />
          {commentList.map(comment => (
            <Comment
              key={comment.CommentNo}
              writer={comment.writer}
              date={comment.date}
              text={comment.contents}
              good={comment.good}
              reply={comment.reply}
              type="Comment"
            />
          ))}
        </CommentContainer>
        <Line />
        <CustomInput type="Board" />
      </Wrapper>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1178px;
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  border-left: 1px solid ${customColor.gray};
  border-right: 1px solid ${customColor.gray};
  padding-bottom: 400px;
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  position: relative;
`;
const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  height: 40px;
  padding: 0 80px 0 16px;
  outline: none;
  border: none;
  border-top: 1px solid ${customColor.gray};
  border-bottom: 1px solid ${customColor.gray};
  font-size: 16px;
  ::placeholder {
    color: ${customColor.gray};
  }
`;

const SubMitButton = styled.div`
  position: absolute;
  width: 60px;
  height: 100%;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${customColor.blue};
`;

const Line = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid ${customColor.gray};
`;