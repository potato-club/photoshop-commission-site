import React from 'react';
import styled from 'styled-components';
import { Typography } from 'src/components/Typography';
import { TitleInput, PictureInput, TextArea, WriteButton } from './components';

export function EditorPage() {
  return (
    <Container>
      <Title>
          <Typography size="40" color={'blue'} fontWeight="bold">
            글 작성
          </Typography>
      </Title>
      <InputContainer>
        <TitleInput />
        <PictureInput />
        <TextArea />
      <WriteButton />
      </InputContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.div`
  margin-top: 100px;
`;

const InputContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1178px;
  gap: 80px 0;
`;