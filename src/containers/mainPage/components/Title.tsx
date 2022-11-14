import Link from 'next/link';
import React from 'react';
import { Typography } from 'src/components';
import { all } from 'src/constants/all/all';
import { pathName } from 'src/constants/pathName';
import styled from 'styled-components';
import { MainRequestBoardProps } from './MainRequestBoard';

const Title = ({ state }: MainRequestBoardProps) => {
  return (
    <TitleBox>
      <Typography size="24" fontWeight="900">
        {state === 'before' && all.before}
        {state === 'doing' && all.doing}
        {state === 'complete' && all.complete}
      </Typography>
      <Plus>
        <Link href={`${pathName.MOREVIEW}/${state}`} passHref>
          <A>
            <Typography size="16" fontWeight="900">
              {all.plus}
            </Typography>
          </A>
        </Link>
      </Plus>
    </TitleBox>
  );
};

export default Title;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Plus = styled.span`
  text-decoration: none;
  margin: 0px 15px 0 0;
  :hover {
    cursor: pointer;
  }
`;

const A = styled.a`
  text-align: center;
`;
