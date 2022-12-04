import React from 'react';
import {
  Control,
  Controller,
  FieldErrorsImpl,
  FieldValues,
} from 'react-hook-form';
import { CustomRadioButton } from 'src/components/CustomRadioButton';
import { Typography } from 'src/components/Typography';
import styled from 'styled-components';
import { ErrorMessage } from '@hookform/error-message';

type Props = {
  control: Control<FieldValues>;
  errors: Partial<FieldErrorsImpl>;
};
export function JobSelectInput({ control, errors }: Props) {
  return (
    <Container>
      <div style={{ marginLeft: '16px' }}>
        <Typography size="20" fontWeight="bold">
          직업
        </Typography>
      </div>
      <RadioWrapper>
        <Controller
          name="userRole"
          control={control}
          rules={{ required: '직업을 선택해주세요' }}
          render={({ field: { onChange, value } }) => (
            <CustomRadioButton
              id="USER"
              label="의뢰자"
              name="userRole"
              selectedValue={value}
              onChange={onChange}
              gap={10}
              marginLeft={65}
              marginRight={20}
            />
          )}
        />
        <Controller
          name="userRole"
          control={control}
          rules={{ required: '직업을 선택해주세요' }}
          render={({ field: { onChange, value } }) => (
            <CustomRadioButton
              id="ARTIST"
              label="디자이너"
              name="userRole"
              selectedValue={value}
              onChange={onChange}
              gap={10}
            />
          )}
        />
        <ErrorMessage
          errors={errors}
          name="userRole"
          render={({ message }) => (
            <ErrorWrapper>
              <Typography size="16" color="danger">
                {message}
              </Typography>
            </ErrorWrapper>
          )}
        />
      </RadioWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 800px;
`;

const RadioWrapper = styled.div`
  position: relative;
  width: max-content;
  display: flex;
`;

const ErrorWrapper = styled.div`
  position: absolute;
  top: 35px;
  left: 65px;
`;

