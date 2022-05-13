import React, { useState } from 'react';
import styled from 'styled-components';
import { Typography } from 'src/components/Typography';
import { TitleInput, ImageInput, TextArea, WriteButton, SecretSelectInput } from './components';
import axios from 'axios';

// const testUrl = 'http://localhost:3000/board/create';

export function EditorPage() {
  const [title, setTitle] = useState('');
  const [images, setImages] = useState<FormData>();
  const [request, setRequest] = useState('');
  const [secret, setSecret] = useState('noSecret');

  const onClick = () => {
    // axios({
    //   method: 'POST',
    //   url: testUrl,
    //   data: {
    //     title,
    //     contentsPicture: images,
    //     contentsText: request,
    //   },
    // })
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    console.log("클릭");
  };

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
        <SecretSelectInput secret={secret} setSecret={setSecret} />
        <TextArea setRequest={setRequest} />
        <WriteButton onClick={onClick} />
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
