import React from 'react';
import { Typography } from 'src/components/Typography';
import styled from 'styled-components';
import { customColor } from 'src/constants/customColor';
type Props = {
  job: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export function JobSelectRadio({ job, onChange }: Props) {
  return (
    <Container>
      <LeftMargin marginLeft={10}>
        <Typography size="20" fontWeight="bold">
          직업
        </Typography>
      </LeftMargin>

      <LeftMargin marginLeft={65}>
        <Typography
          size="16"
          fontWeight="bold"
          color={job === 'requester' ? 'black' : 'gray'}
        >
          의뢰자
        </Typography>
      </LeftMargin>
      <RadioButton
        type="radio"
        name="job"
        id="requester"
        value="requester"
        onChange={onChange}
        checked={job === 'requester'}
      />
      <Label htmlFor="requester" />

      <LeftMargin marginLeft={65}>
        <Typography
          size="16"
          fontWeight="bold"
          color={job === 'designer' ? 'black' : 'gray'}
        >
          디자이너
        </Typography>
      </LeftMargin>
      <RadioButton
        type="radio"
        name="job"
        id="designer"
        value="designer"
        onChange={onChange}
        checked={job === 'designer'}
      />
      <Label htmlFor="designer" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  display: flex;
  margin-left: 10px;
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

type LeftMarginProps = {
  marginLeft: number;
};
const LeftMargin = styled.div<LeftMarginProps>`
  margin-left: ${({ marginLeft }) => marginLeft + 'px'};
`;
