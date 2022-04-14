import { useState } from 'react';
import { SideBar } from './sidebar/Sidebar';
import styled from 'styled-components';

const nickName = '양파먹는소녀';

const NavItemInfo = [
  {
    name: '프로필',
    pathName: '/mypage/profile',
  },
  {
    name: '평점',
    pathName: '/mypage/rate',
  },
  {
    name: '작성 글',
    pathName: '/mypage/post',
  },
  {
    name: '작성 댓글',
    pathName: '/mypage/comment',
  },
  {
    name: '설정',
    pathName: '/mypage/option',
  },
];

type MyPageLayoutType = React.PropsWithChildren<{}>;

export const MyPageLayout = ({ children }: MyPageLayoutType) => {
  return (
    <Container>
      <SideBarWrapper>
        <SideBar nickName={nickName} NavItemInfo={NavItemInfo} />
      </SideBarWrapper>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1178px;
  margin: auto;
`;
export const SideBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  margin: auto;
  height: 100%;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75%;
  margin: auto;
  height: 100%;
`;
