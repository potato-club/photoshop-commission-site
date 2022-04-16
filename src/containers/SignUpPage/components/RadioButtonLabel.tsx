import React from 'react'
import { Typography } from 'src/components/Typography';
import styled from 'styled-components';
type Props = {
  text: string;
  job: string;
  selectedJob: string;
}
export function RadioButtonLabel({text, job, selectedJob}:Props) {
  return (
    <LeftMargin>
      <Typography
        size="16"
        fontWeight="bold"
        color={selectedJob === job ? 'black' : 'gray'}
      >
        {text}
      </Typography>
    </LeftMargin>
  );
}


const LeftMargin = styled.div`
  margin-left: 65px;
`;
