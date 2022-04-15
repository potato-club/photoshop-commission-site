import { useRouter } from 'next/router';
import { Typography } from 'src/components/Typography';
import { customColor } from 'src/constants';
import styled from 'styled-components';
import { NavItem } from './NavItem';

type SideBarType = {
  NavItemInfo: { name: string; pathName: string }[];
  nickName: string;
};

export const SideBar = ({ NavItemInfo, nickName }: SideBarType) => {
  const route = useRouter();
  return (
    <Wrapper>
      <TitleWrapper>
        <Typography size="24" color="blue" fontWeight="bold">
          {nickName}
        </Typography>
      </TitleWrapper>
      <NavList>
        {NavItemInfo.map(({ name, pathName }, i) => (
          <NavItem
            key={i}
            name={name}
            pathName={pathName}
            route={route.pathname}
          />
        ))}
      </NavList>
      <BottomNavWrapper>
        <BottomNavItem>
          <Typography size="12" color="gray">
            로그아웃
          </Typography>
        </BottomNavItem>
        <BottomNavItem>
          <Typography size="12" color="gray">
            고객문의
          </Typography>
        </BottomNavItem>
      </BottomNavWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleWrapper = styled.div`
  margin-top: 70px;
  margin-bottom: 70px;
`;

const NavList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BottomNavWrapper = styled.div`
  display: flex;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const BottomNavItem = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
  &:hover div {
    text-decoration: underline;
    color: ${customColor.black};
  }
`;
