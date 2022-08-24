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
      <LeftMargin>
        <Typography size="20" fontWeight="bold">
          직업
        </Typography>
      </LeftMargin>
      <CustomRadioButton
        id="USER"
        label="의뢰자"
        name="job"
        selectedValue={selectedJob}
        onChange={e => setSelectedJob(e.target.value)}
        gap={10}
        marginLeft={65}
        marginRight={20}
      />

      <CustomRadioButton
        id="ARTIST"
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
  width: 100%;
  max-width: 800px;
`;

const LeftMargin = styled.div`
  margin-left: 16px;
`;
