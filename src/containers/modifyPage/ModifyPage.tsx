import React from 'react';
import styled from 'styled-components';
import { customColor } from 'src/constants';
import { FieldValues, useForm } from 'react-hook-form';
import { Header, Contents, Buttons } from './components';
import { BoardType } from 'src/types/board.type';
import { ImageType } from 'src/types/image.type';
type Props = {
  title: string;
  imageUrls: ImageType[];
  contents: string;
};
export const ModifyPage = ({ title, imageUrls, contents }: Props) => {
  const { register, handleSubmit } = useForm();
  const submit = async (data: FieldValues) => {
    // 로직
    console.log(data);
  };

  // boardNo: number;
  // title: string;
  // state: string;
  // writer: string;
  // createdDate: string;
  // modifiedDate: string;
  // imageUrls: ImageType[];
  // imageOpen: imageOpenType;
  // contents: string;
  // totalComment: number;
  // commentList: CommentType[];

  return (
    <Container>
      <Wrapper>
        <form onSubmit={handleSubmit(submit)}>
          <Header register={register} title={title}/>
          <Contents register={register} imageUrls={imageUrls} contents={contents}/>
          <Line />
          <Buttons />
        </form>
      </Wrapper>
    </Container>
  );
};

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
  padding-bottom: 400px;
`;

const Line = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid ${customColor.gray};
`;
