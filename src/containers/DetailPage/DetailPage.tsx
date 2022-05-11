
import React from 'react';
import styled from 'styled-components';
import { customColor } from 'src/constants/customColor';
import { Contents, Header, CommentHeader, Comment } from './components';
import { Typography } from 'src/components/Typography';
import { DetailType } from 'src/dummy/detailDummy';
import { CommentTest } from './components/CommentTest';
import { ReplyTest } from './components/ReplyTest';
type Props = {
  data: DetailType;
};
export function DetailPage({ data }: Props) {
  const {Title, State, Writer, Date, ImageUrls, Text, TotalComment, Comments} = data;
  return (
    <Container>
      <Wrapper>
        <Header
          Title={Title}
          Writer={Writer}
          Date={Date}
          State={State}
        />
        <Contents ImageUrls={ImageUrls} Text={Text} />
        <CommentContainer>
          <CommentHeader TotalComment={TotalComment} />
          {Comments.map(comment => (
            <ReplyTest
              key={comment.id}
              Writer={comment.Writer}
              Date={comment.Date}
              Text={comment.Text}
              Good={comment.Good}
              Reply={comment.Reply}
              type='Comment'
            ></ReplyTest>
          ))}
        </CommentContainer>
        <InputWrapper>
          <Input placeholder="작성할 댓글을 입력해주세요..." />
          <SubMitButton>
            <Typography size="16" color="white">
              입력
            </Typography>
          </SubMitButton>
        </InputWrapper>
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
  width: 1178px;
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
