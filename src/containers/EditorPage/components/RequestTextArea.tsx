import React, { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react';
import { Typography } from 'src/components/Typography';
import { customColor } from 'src/constants';
import { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form';

import styled from 'styled-components';
import { CustomErrorMessage } from 'src/components/CustomErrorMessage';
type Props = {
  register: UseFormRegister<FieldValues>;
  errors: Partial<FieldErrorsImpl>;
};
export function RequestTextArea({ register, errors }: Props) {
  return (
    <Container>
      <Typography size="20" fontWeight="bold">
        의뢰내용
      </Typography>
      <InputWrapper>
        <TextArea
          {...register('introduction', {
            required: '내용를 입력해주세요',
          })}
          placeholder="의뢰내용을 입력해주세요"
        />
        <CustomErrorMessage
          errors={errors}
          name="introduction"
          leftPosition="30"
          bottomPosition="-20"
        />
      </InputWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 900px;
  white-space: nowrap;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const TextArea = styled.textarea`
  margin-left: 20px;
  border-radius: 10px;
  width: 100%;
  outline: none;
  border-bottom: 1px solid ${customColor.black};
  height: 600px;
  font-size: 16px;
  padding: 20px;
  margin-top: -20px;
  font-weight: bold;
  resize: none;
  ::placeholder {
    color: ${customColor.gray};
  }
`;

