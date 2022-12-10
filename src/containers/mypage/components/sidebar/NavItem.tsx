import Link from 'next/link';
import { Typography } from 'src/components/Typography';
import { customColor } from 'src/constants';
import styled from 'styled-components';

type NavItemType = {
  name: string;
  pathName: string;
  route: string;
};
export const NavItem = ({ name, pathName, route }: NavItemType) => {
  return (
    <Wrapper>
      <Link href={pathName}>
        <a style={{ textDecoration: 'none' }}>
          <Typography
            size="20"
            color={route === pathName ? 'black' : 'gray'}
            fontWeight={route === pathName ? 'bold' : 'none'}
          >
            {name}
          </Typography>
        </a>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  cursor: pointer;
  margin-bottom: 40px;

  &:hover div {
    text-decoration: underline;
    color: ${customColor.black};
  }
`;
