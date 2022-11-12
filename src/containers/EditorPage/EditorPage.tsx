import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Typography } from 'src/components/Typography';
import {
  TitleInput,
  ImageInput,
  TextArea,
  WriteButton,
  SecretSelectInput,
} from './components';
import axios from 'axios';
import { boardApi } from '../../apis/board';
import { useCookies } from 'src/hooks/useCookies';
import { useSessionStorage } from 'src/hooks/useSessionStorage';

// const testUrl = 'http://localhost:3000/board/create';

export function EditorPage() {
  const [title, setTitle] = useState('');
  const [images, setImages] = useState<File[]>();
  const [request, setRequest] = useState('');
  const [secret, setSecret] = useState<boolean>(false);
  const { getCookie } = useCookies();
  const { getSessionStorage } = useSessionStorage();

  useEffect(() => {
    console.log(images);
  }, [images]);

  const onClick = () => {
    if (!title) {
      alert('제목을 입력해주세요');
      return;
    }
    if (!images) {
      alert('사진을 등록해주세요');
      return;
    }
    try {
      const frm = new FormData();
      frm.append('title', title);
      frm.append('context', request);
      frm.append('questEnum', 'BEFORE'); // ! 백엔드 코드 수정 전 임시 값

      images.forEach(data => {
        frm.append('image', data);
      });

      const data = boardApi.create(
        frm,
        getSessionStorage('access'),
        getCookie('refresh'),
      );

      // console.log(data);
      // console.log(frm)

      // console.log(getSessionStorage('access'));
      // console.log(getCookie('refresh'));

      // accessToken: getSessionStorage('access'),
      // refreshToken: getCookie('refresh')

      // alert('등록완료');
    } catch (error) {
      console.log(error);
    }
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
        <ImageInput setImages={setImages} />
        <SecretSelectInput secret={secret} setSecret={setSecret} />
        <TextArea setRequest={setRequest} />
        <WriteButton onClick={onClick} />
      </InputContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 160px;
`;
const Title = styled.div`
  display: flex;
  width: 100%;
  max-width: 900px;
  justify-content: center;
  margin: 100px 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 80px 0;
`;
