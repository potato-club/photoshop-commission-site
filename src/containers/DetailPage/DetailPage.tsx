import React from 'react';
import styled from 'styled-components';
import { customColor } from 'src/constants/customColor';
import { Contents, Header, CommentHeader, Comment } from './components';

export default function DetailPage() {
  return (
    <Container>
      <Wrapper>
        <Header />
        <Contents />
        <CommentContainer>
          <CommentHeader />
          <Comment />
          <Comment />
          <Comment />
        </CommentContainer>
        <Input></Input>
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
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  height: 40px;
  padding: 0 16px;
`;