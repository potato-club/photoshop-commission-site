import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Typography } from 'src/components/Typography';
import { TitleInput, ImageInput, TextArea, WriteButton } from './components';

export function EditorPage() {
  const [title, setTitle] = useState('');
  const [images, setImages] = useState<FormData>();
  const [request, setRequest] = useState('');
  useEffect(() => {
    console.log(title);
  }, [title]);

  useEffect(() => {
    console.log(request);
  }, [request]);

  // useEffect(() => {
  //   if (images) {
  //     for (let value of images.values()) {
  //       console.log(value.name);
  //     }
  //   }
  // }, [images]);

  return (
    <Container>
      <Title>
        <Typography size="40" color={'blue'} fontWeight="bold">
          글 작성
        </Typography>
      </Title>
      <InputContainer>
        <TitleInput setTitle={setTitle} />
        <ImageInput images={images} setImages={setImages} />
        <TextArea setRequest={setRequest} />
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
