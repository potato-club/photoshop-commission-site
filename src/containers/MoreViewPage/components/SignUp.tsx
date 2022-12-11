import Link from 'next/link';
import React from 'react';
import { Typography } from 'src/components/Typography';
import { all } from 'src/constants/all/all';
import { pathName } from 'src/constants/pathName';
import styled from 'styled-components';

const SignUp = () => {
  return (
    <SignUpBox>
      <SignUpComment>
        <Typography size="40" color="blue" fontWeight="900">
          {all.comment}
        </Typography>
      </SignUpComment>
      <Link href={pathName.EDITOR} passHref>
        <A>
          <SignUpBtn>
            <Typography size="20" color="white" fontWeight="900">
              {all.writeBtn}
            </Typography>
          </SignUpBtn>
        </A>
      </Link>
    </SignUpBox>
  );
};

export default SignUp;

const SignUpBox = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  flex-direction: column;
  margin-top: 130px;
  margin-bottom: 150px;
`;

const SignUpComment = styled.div`
  text-align: center;
`;

const SignUpBtn = styled.button`
  margin: 60px auto 0 auto;
  width: 185px;
  background-color: rgba(7, 104, 159, 1);
  border-radius: 10px;
  padding: 10px 27px;
  border: none;
  :hover {
    background-color: black;
  }
`;

const A = styled.a`
  text-align: center;
`;
