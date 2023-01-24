import Link from 'next/link';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Typography } from './Typography';

interface ITheme {
  title: string;
}

const Theme = ({ title }: ITheme) => {
  const theme = useMemo(
    () => (title.length >= 30 ? title.substring(0, 30) + '...' : title),
    [title],
  );

  return (
    <ThemeBox>
      <Typography size="16" color="black">
        {theme}
      </Typography>
    </ThemeBox>
  );
};

export default Theme;

const ThemeBox = styled.div`
  width: 100%;
  margin-top: 9px;
  height: 32px;
`;
