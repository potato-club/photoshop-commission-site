import React from 'react';
import { Typography } from 'src/components/Typography';
import { customColor } from 'src/constants';
import styled from 'styled-components';

type Props = {
  id: string;
  label: string;
  selectedValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  gap: number;
  marginLeft?: number;
  marginRight?: number;
};

export default function CustomRadioButton(props: Props) {
  const {id, label, selectedValue, onChange, gap, marginLeft, marginRight} = props;
  return (
    <Container gap={gap} marginLeft={marginLeft} marginRight={marginRight}>
      <Typography
        size="16"
        fontWeight="bold"
        color={selectedValue === id ? 'black' : 'gray'}
      >
        {label}
      </Typography>
      <RadioButton
        type="radio"
        name="job"
        id={id}
        value={id}
        onChange={onChange}
        checked={id === selectedValue}
      />
      <Label htmlFor={id} />
    </Container>
  );
}

type StyleProps = {
  gap: number;
  marginLeft?: number;
  marginRight?: number;
};
const Container = styled.div<StyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ gap }) => gap + 'px'};
  margin-left: ${({ marginLeft }) => marginLeft + 'px'};
  margin-right: ${({ marginRight }) => marginRight + 'px'};
`;
const Label = styled.label`
  display: flex;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background-color: ${customColor.gray};
`;

const RadioButton = styled.input`
  display: none;
  &:checked + ${Label} {
    background-color: ${customColor.blue};
  }
`;
