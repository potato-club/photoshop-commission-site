import React from 'react';
import { Typography } from 'src/components';
import styled from 'styled-components';
import { useGetToken } from 'src/hooks/useGetToken';
import { useSessionStorage } from 'src/hooks/useSessionStorage';
import { useRouter } from 'next/router';
import { customColor } from 'src/constants';
import { useKaKaoLogin } from 'src/hooks/useKaKaoLogin';

const Write = () => {
  const { access, refresh } = useGetToken();
  const { getSessionStorage } = useSessionStorage();
  const job = getSessionStorage('job');
  const isArtist = access && refresh && job === 'ARTIST';
  const router = useRouter();
  const { login } = useKaKaoLogin();

  const checkRoute = () => {
    if (!access || !refresh) {
      login();
    } else if (isArtist) {
      router.push('/moreView/before');
    } else {
      router.push('/editor');
    }
  };

  return (
    <WriteBtn onClick={checkRoute}>
      <Typography size="20" color="white" fontWeight="bold">
        {isArtist ? '커미션 활동하기' : '의뢰 작성하기'}
      </Typography>
    </WriteBtn>
  );
};

export default Write;

const WriteBtn = styled.button`
  margin-top: 60px;
  background-color: ${customColor.blue};
  border-radius: 10px;
  padding: 10px 28px;
  cursor: pointer;
  :hover {
    transform: scale(1.01);
  }
  :active {
    transform: scale(0.99);
  }
`;
