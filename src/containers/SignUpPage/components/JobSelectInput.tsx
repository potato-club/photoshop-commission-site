import React from 'react';
import CustomRadioButton from 'src/components/CustomRadioButton';
import { Typography } from 'src/components/Typography';
import styled from 'styled-components';
type Props = {
  selectedJob: string;
  setSelectedJob: React.Dispatch<React.SetStateAction<string>>;
};
export function JobSelectInput({ selectedJob, setSelectedJob }: Props) {
  return (
    <Container>
      <TextWrapper>
        <Typography size="20" fontWeight="bold">
          직업
        </Typography>
      </TextWrapper>
      <CustomRadioButton
        id="requester"
        label="의뢰자"
        name="job"
        selectedValue={selectedJob}
        onChange={e => setSelectedJob(e.target.value)}
        gap={10}
        marginRight={20}
      />

      <CustomRadioButton
        id="designer"
        label="디자이너"
        name="job"
        selectedValue={selectedJob}
        onChange={e => setSelectedJob(e.target.value)}
        gap={10}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const TextWrapper = styled.div`
  margin-left: 10px;
  margin-right: 65px;
`;
