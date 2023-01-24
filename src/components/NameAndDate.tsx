import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { Typography } from './Typography';

interface INameAndDate {
  nickname: string;
  //   createDate: string;  서버에서 string값으로 주면 적용
}

const NameAndDate = ({ nickname }: INameAndDate) => {
  return (
    <NameDateBox>
      <Typography size="16" color="blue" fontWeight="bold">
        {nickname}
      </Typography>
      <Typography size="16" color="lightBlue" fontWeight="bold">
        {/* {createDate} */}
      </Typography>
    </NameDateBox>
  );
};

export default NameAndDate;

const NameDateBox = styled.div`
  margin-top: 12px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
