import Link from 'next/link';
import { Typography } from 'src/components/Typography';
import styled from 'styled-components';

type NavItemType = {
  name: string;
  pathName: string;
};
export const NavItem = ({ name, pathName }: NavItemType) => {
  return (
    <Wrapper>
      <Link href={pathName}>
        <a style={{ textDecoration: 'none' }}>
          <Typography size="16">{name}</Typography>
        </a>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
