import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Typography } from 'src/components/Typography';
import { customColor } from 'src/constants';
import { signUpApi } from 'src/apis';
import { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

type Props = {
  register: UseFormRegister<FieldValues>;
  errors: Partial<FieldErrorsImpl>;
};
export function NicknameInput({ register, errors }: Props) {
  const checkDuplication = async (nickname: string) => {
    const { data } = await signUpApi.checkNickname({
      params: {
        nickname,
      },
    });
    return data ? true : '닉네임이 중복되었습니다';
  };

  return (
    <Container>
      <div style={{marginLeft: '12px'}}>
        <Typography size="20" fontWeight="bold">
          닉네임
        </Typography>
      </div>
      <Wrapper>
        <InputWrapper>
          <div style={{ position: 'relative' }}>
            <Input
              placeholder="닉네임을 입력해주세요"
              maxLength={8}
              {...register('nickname', {
                required: '이름을 입력해주세요',
                validate: checkDuplication,
              })}
            />
            <Caption>
              <Typography size="12" fontWeight="bold">
                최대 8글자
              </Typography>
            </Caption>
            <ErrorMessage
              errors={errors}
              name="nickname"
              render={({ message }) => (
                <ErrorWrapper>
                  <Typography size="16" color="danger">
                    {message}
                  </Typography>
                </ErrorWrapper>
              )}
            />
          </div>
        </InputWrapper>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 800px;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Input = styled.input`
  border-radius: 10px;
  border: 1px solid ${customColor.black};
  padding: 0 10px;
  width: 280px;
  height: 30px;
  font-size: 16px;
  margin-left: 50px;
  :focus {
    outline: none;
  }
  ::placeholder {
    font-weight: bold;
    color: ${customColor.gray};
  }
`;

const Caption = styled.div`
  position: absolute;
  top: 35px;
  right: 0;
`;

const ErrorWrapper = styled.div`
  position: absolute;
  top: 35px;
  left: 50px;
`;
