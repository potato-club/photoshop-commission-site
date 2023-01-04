import React from 'react';
import { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form';
import { CustomErrorMessage } from 'src/components/CustomErrorMessage';
import { Typography } from 'src/components/Typography';
import { customColor } from 'src/constants';
import styled from 'styled-components';
type Props = {
  register: UseFormRegister<FieldValues>;
  errors: Partial<FieldErrorsImpl>;
};
export function TitleInput({ register, errors }: Props) {
  return (
    <Container>
      <div style={{ marginLeft: '12px', whiteSpace: 'nowrap' }}>
        <Typography size="20" fontWeight="bold">
          글 제목
        </Typography>
      </div>
      <InputWrapper>
        <Input
          placeholder="제목을 입력해주세요"
          {...register('title', { required: '제목을 입력해주세요' })}
        />
        <CustomErrorMessage errors={errors} name="title" leftPosition="30" />
      </InputWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 900px;
`;
const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  margin-left: 20px;
  border: none;
  outline: none;
  border-bottom: 1px solid ${customColor.black};
  width: 100%;
  max-width: 800px;
  font-size: 16px;
  padding: 2px 10px;
  font-weight: bold;
  ::placeholder {
    color: ${customColor.gray};
  }
`;
