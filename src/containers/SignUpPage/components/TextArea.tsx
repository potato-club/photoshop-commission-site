import React, { ChangeEvent, ChangeEventHandler } from 'react';
import { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form';
import { Typography } from 'src/components/Typography';
import { customColor } from 'src/constants';
import styled from 'styled-components';
import { CustomErrorMessage } from 'src/components/CustomErrorMessage';

type Props = {
  register: UseFormRegister<FieldValues>;
  errors: Partial<FieldErrorsImpl>;
};
export function TextAreaComponent({ register, errors }: Props) {

  return (
    <Container>
      <Typography size="20" fontWeight="bold">
        자기소개
      </Typography>
      <InputWrapper>
        <TextArea
          {...register('introduction', {
            required: '소개를 입력해주세요',
          })}
          placeholder="자기소개를 입력해주세요"
        />
        <Caption>
          <Typography size="12" fontWeight="bold">
            닉네임과 자기소개는 마이페이지에서 이후에 수정가능합니다
          </Typography>
        </Caption>
        <CustomErrorMessage errors={errors} name="introduction" leftPosition="40" bottomPosition='-20'/>
      </InputWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 800px;
  white-space: nowrap;
`;
const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  position: relative;
`;

const Caption = styled.div`
  position: absolute;
  bottom: -20px;
  right: 0;
  div {
    right: 0;
  }
`;

const TextArea = styled.textarea`
  border-radius: 10px;
  height: 330px;
  padding: 5px 10px;
  box-sizing: border-box;
  margin-left: 40px;
  font-size: 16px;
  ::placeholder {
    font-weight: bold;
    color: ${customColor.gray};
  }
  :focus {
    outline: none;
  }
  resize: none;
`;

const ErrorWrapper = styled.div`
  position: absolute;
  bottom: -20px;
  left: 40px;
`;
