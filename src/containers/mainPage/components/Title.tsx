import Link from 'next/link';
import React from 'react';
import { Typography } from 'src/components';
import { pathName } from 'src/constants/pathName';
import { useCurrentMode } from 'src/hooks/useCurrentMode';
import styled from 'styled-components';
import { MainRequestBoardProps } from './MainRequestBoard';

const Title = ({ state }: MainRequestBoardProps) => {
  const { fontColor } = useCurrentMode();
  return (
    <TitleBox>
      <Typography size="24" fontWeight="bold" color={fontColor}>
        {state === 'before' && '의뢰전'}
        {state === 'doing' && '의뢰중'}
        {state === 'complete' && '의뢰완료'}
      </Typography>
      <Plus>
        <Link href={`${pathName.MOREVIEW}/${state}`} passHref>
          <A>
            <Typography size="16" fontWeight="bold">
              더보기
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
  margin: 0px 16px 0 0;
  :hover {
    cursor: pointer;
  }
`;

const A = styled.a`
  text-align: center;
`;
