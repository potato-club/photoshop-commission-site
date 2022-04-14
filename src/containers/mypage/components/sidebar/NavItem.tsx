import Link from 'next/link';
import { Typography } from 'src/components/Typography';
import { customColor } from 'src/constants';
import styled from 'styled-components';

type NavItemType = {
  name: string;
  pathName: string;
};
export const NavItem = ({ name, pathName }: NavItemType) => {
  return (
    <Link href={pathName}>
      <a style={{ textDecoration: 'none' }}>
        <Wrapper>
          <Typography size="24" color="gray">
            {name}
          </Typography>
        </Wrapper>
      </a>
    </Link>
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
