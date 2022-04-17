import React from 'react';
import { Typography } from 'src/components/Typography';
import styled from 'styled-components';
import { RadioButtonLabel, CustomRadioButton } from './index';
type Props = {
  selectedJob: string;
  setSelectedJob: React.Dispatch<React.SetStateAction<string>>;
};
export function JobSelectRadio({ selectedJob, setSelectedJob }: Props) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSelectedJob(value);
  };
  return (
    <Container>
      <LeftMargin>
        <Typography size="20" fontWeight="bold">
          직업
        </Typography>
      </LeftMargin>
      <RadioButtonLabel
        text="의뢰자"
        job="requester"
        selectedJob={selectedJob}
      />
      <CustomRadioButton
        job="requester"
        selectedJob={selectedJob}
        onChange={onChange}
      />
      <RadioButtonLabel
        text="디자이너"
        job="designer"
        selectedJob={selectedJob}
      />
      <CustomRadioButton
        job="designer"
        selectedJob={selectedJob}
        onChange={onChange}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const LeftMargin = styled.div`
  margin-left: 10px;
`;
