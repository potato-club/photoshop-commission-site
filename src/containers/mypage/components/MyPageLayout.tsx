import { SideBar } from './sidebar/Sidebar';
import styled from 'styled-components';
import { pathName } from 'src/constants/pathName';

const nickName = '양파먹는소녀';

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

  margin: auto;
`;
export const SideBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 190px;
  height: 100%;

  min-height: 100%;
  margin-bottom: 80px;
  margin-top: 20px;
  border-radius: 20px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.6);
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 75%;
  margin: auto;
  margin-bottom: auto;
  margin-top: 60px;
  height: 100%;
`;
