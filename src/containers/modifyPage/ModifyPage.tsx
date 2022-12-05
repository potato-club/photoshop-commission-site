import React from 'react';
import styled from 'styled-components';
import { customColor } from 'src/constants';
import { FieldValues, useForm } from 'react-hook-form';
import { Header, Contents, Buttons } from './components';

export const ModifyPage = () => {
  const { register, handleSubmit } = useForm();
  const submit = async(data:FieldValues) => {
    // 로직
    console.log(data);
  }
  return (
    <Container>
      <Wrapper>
        <form onSubmit={handleSubmit(submit)}>
          <Header register={register} />
          <Contents register={register} />
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
