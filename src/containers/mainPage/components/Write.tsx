import React from 'react';
import Link from 'next/link';
import { Typography } from 'src/components';
import { all } from 'src/constants/all/all';
import { pathName } from 'src/constants/pathName';
import styled from 'styled-components';

const Write = () => {
  return (
    <Link href={pathName.SIGNUP} passHref>
      <WriteBtn>
        <Typography size="20" color="white" fontWeight="900">
          {all.writeBtn}
        </Typography>
      </WriteBtn>
    </Link>
  );
};

export default Write;

const WriteBtn = styled.button`
  margin: 60px auto 0 auto;
  width: 185px;
  background-color: rgba(7, 104, 159, 1);
  border-radius: 10px;
  padding: 10px 27px;
  border: none;
  :hover {
    background-color: black;
    cursor: pointer;
  }
`;
