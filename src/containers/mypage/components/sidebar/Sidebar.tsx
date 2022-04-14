import { Typography } from 'src/components/Typography';
import styled from 'styled-components';
import { NavItem } from './NavItem';

type SideBarType = {
  NavItemInfo: { name: string; pathName: string }[];
  nickName: string;
};

export const SideBar = ({ NavItemInfo, nickName }: SideBarType) => {
  return (
    <Wrapper>
      <div>
        <Typography size="24">{nickName}</Typography>
      </div>
      <div>
        {NavItemInfo.map(({ name, pathName }, i) => (
          <NavItem key={i} name={name} pathName={pathName} />
        ))}
      </div>
      <div>
        <div>
          <Typography size="12">로그아웃</Typography>
        </div>
        <div>
          <Typography size="12">고객문의</Typography>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
