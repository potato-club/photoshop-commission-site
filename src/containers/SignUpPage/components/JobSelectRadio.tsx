import React from 'react';
import { Typography } from 'src/components/Typography';
import styled from 'styled-components';
import { RadioButtonLabel, CustomRadioButton } from './index';
type Props = {
  selectedJob: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export function JobSelectRadio({ selectedJob, onChange }: Props) {
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
