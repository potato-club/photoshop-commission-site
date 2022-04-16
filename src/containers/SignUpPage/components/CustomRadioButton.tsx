import React from 'react'
import { customColor } from 'src/constants';
import styled from "styled-components";
type Props = {
  job: string;
  selectedJob: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export function CustomRadioButton({ job, selectedJob, onChange }:Props) {
  return (
    <>
      <RadioButton
        type="radio"
        name="job"
        id={job}
        value={job}
        onChange={onChange}
        checked={job === selectedJob}
      />
      <Label htmlFor={job} />
    </>
  );
}

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