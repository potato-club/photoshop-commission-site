import { SideBar } from './sidebar/Sidebar';
import styled from 'styled-components';
import { customColor } from 'src/constants';
import { pathName } from 'pathName';

const nickName = '양파먹는소녀';

const NavItemInfo = [
  {
    name: '프로필',
    pathName: pathName.MYPAGE.PROFILE,
  },
  {
    name: '평점',
    pathName: pathName.MYPAGE.PROFILE,
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
  align-items: flex-start;
  width: 1178px;
  height: 100%;
  margin: auto;
`;
export const SideBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 20%;
  min-height: 100%;
  border-left: 1px solid ${customColor.gray};
  border-right: 1px solid ${customColor.gray};
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 75%;
  margin-top: 60px;
  margin-left: auto;

  margin-bottom: auto;
`;
