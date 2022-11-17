import Link from 'next/link';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Typography } from './Typography';

interface ITheme {
  id: number;
  title: string;
}

const Theme = ({ id, title }: ITheme) => {
  const theme = useMemo(
    () => (title.length >= 30 ? title.substring(0, 30) + '...' : title),
    [title],
  );

  return (
    <ThemeBox>
      <Link href={`/detail/${id}`} passHref>
        <a>
          <Typography size="16" color="black">
            {theme}
          </Typography>
        </a>
      </Link>
    </ThemeBox>
  );
};

export default Theme;

const ThemeBox = styled.div`
  width: 100%;
  margin-top: 9px;
  height: 32px;
`;
