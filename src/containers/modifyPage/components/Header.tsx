import React from 'react';
import { Typography } from 'src/components/Typography';
import { customColor } from 'src/constants';
import styled from 'styled-components';
import { FieldValues, UseFormRegister } from 'react-hook-form';
type Props = {
  register: UseFormRegister<FieldValues>;
  title: string;
}
export function Header({ register, title }: Props) {
  return (
    <Container>
      <Typography size="24" color="gray">
        수정페이지
      </Typography>
      <Input
        defaultValue={title}
        placeholder="제목을 입력해주세요"
        {...register('title', { required: true })}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  padding: 0 16px 24px 16px;
  margin-top: 40px;
  border-bottom: 1px solid ${customColor.gray};
`;

const Input = styled.input`
  font-size: 32px;
  padding: 8px;
  width: 100%;
  max-width: 800px;
  font-weight: bold;
`;
