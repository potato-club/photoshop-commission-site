import { MyPageLayout } from './components/MyPageLayout';
import { InfoItem, ProfileLayout } from './components/profile';
import * as S from './Profile.style';

const dummyInfo = {
  nickName: '양파먹는 소녀',
  email: 'ohbaya@naver.com',
  createDate: '2020.02.20',
  job: 'client',
  rate: '4.3',
};
export const Profile = () => {
  return (
    <MyPageLayout>
      <S.Container>
        <S.Wrapper>
          <ProfileLayout title="개인정보">
            <InfoItem header="닉네임" item={dummyInfo.nickName} />
            <InfoItem header="이메일" item={dummyInfo.email} />
            <InfoItem header="최초 가입일" item={dummyInfo.createDate} />
            <InfoItem header="직업" item={dummyInfo.job} />
            <InfoItem header="평점" item={dummyInfo.rate} />
          </ProfileLayout>
        </S.Wrapper>
        <S.Wrapper>
          <ProfileLayout title="자기소개">
            <div>와ddd우</div>
          </ProfileLayout>
        </S.Wrapper>
      </S.Container>
    </MyPageLayout>
  );
};
