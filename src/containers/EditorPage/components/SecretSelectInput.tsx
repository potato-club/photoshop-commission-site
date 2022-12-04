import React from 'react';
import { CustomRadioButton } from 'src/components/CustomRadioButton';
import { Typography } from 'src/components/Typography';
import { imageOpenType } from 'src/types/imageOpen.type';
import styled from 'styled-components';
import {
  Control,
  Controller,
  FieldErrorsImpl,
  FieldValues
} from 'react-hook-form';
import { CustomErrorMessage } from 'src/components/CustomErrorMessage';

type Props = {
  errors: Partial<FieldErrorsImpl>;
  control: Control<FieldValues>;
};
export function SecretSelectInput({ control, errors }: Props) {
  return (
    <Container>
      <Typography size="20" fontWeight="bold">
        공개여부
      </Typography>
      <InputWrapper>
        <Controller
          name="imageOpen"
          control={control}
          rules={{ required: '직업을 선택해주세요' }}
          render={({ field: { onChange, value } }) => (
            <CustomRadioButton
              id="OPEN"
              label="공개"
              name="imageOpen"
              selectedValue={value}
              onChange={onChange}
              gap={10}
              marginLeft={30}
              marginRight={20}
            />
          )}
        />
        <Controller
          name="imageOpen"
          control={control}
          rules={{ required: '직업을 선택해주세요' }}
          render={({ field: { onChange, value } }) => (
            <CustomRadioButton
              id="NOT_OPEN"
              label="비공개"
              name="imageOpen"
              selectedValue={value}
              onChange={onChange}
              gap={10}
              marginLeft={30}
              marginRight={20}
            />
          )}
        />
        <CustomErrorMessage
          errors={errors}
          name="imageOpen"
          leftPosition="30"
          bottomPosition="-24"
        />
      </InputWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 900px;
`;

const InputWrapper = styled.div`
  display: flex;
  position: relative;
`;