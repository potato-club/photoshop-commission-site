import React from 'react';
import { CustomRadioButton } from 'src/components/CustomRadioButton';
import { Typography } from 'src/components/Typography';
import { imageOpenType } from 'src/types/imageOpen.type';
import styled from 'styled-components';
import {
  Control,
  Controller,
  FieldErrorsImpl,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form';

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
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 900px;
`;
