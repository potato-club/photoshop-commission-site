import { useRouter } from 'next/router';
import { Typography } from 'src/components/Typography';
import { customColor } from 'src/constants';
import { pathName } from 'src/constants/pathName';
import { useSessionStorage } from 'src/hooks/useSessionStorage';
import styled from 'styled-components';
import { NavItem } from './NavItem';

const NavItemInfo = [
  {
    name: '프로필',
    pathName: pathName.MYPAGE.PROFILE,
  },
  {
    name: '평점',
    pathName: pathName.MYPAGE.RATE,
  },
  {
    name: '후기 남기기',
    pathName: pathName.MYPAGE.REVIEW,
  },
  {
    name: '작성 글',
    pathName: pathName.MYPAGE.POST.ALL,
  },
  {
    name: '작성 댓글',
    pathName: pathName.MYPAGE.COMMENT,
  },
  {
    name: '설정',
    pathName: pathName.MYPAGE.OPTION,
  },
];

const NICKNAME = 'nickname';

export const SideBar = () => {
  const { getSessionStorage } = useSessionStorage();
  const nickName = getSessionStorage(NICKNAME);

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
