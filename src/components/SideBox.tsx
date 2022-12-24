import { Typography } from '../components/index';
import styled from 'styled-components';
import { useSessionStorage } from 'src/hooks/useSessionStorage';
import { useCurrentMode } from 'src/hooks/useCurrentMode';
import { customColor } from 'src/constants';
import { useQuery } from 'react-query';
import { useState } from 'react';
import { myPageApi } from 'src/apis/myPage';

export const SideBox = () => {
  const { getSessionStorage } = useSessionStorage();
  const { fontColor } = useCurrentMode();
  const [score, setScore] = useState('');
  useQuery(['getGrade'], () => myPageApi.rate.myGrade(), {
    onSuccess: ({ data }) => {
      setScore(data);
    },
  });

  // const { isLoading, isError } = useQuery(
  //   ['getMyComment', page],
  //   () => myPageApi.myComment.list(page),
  //   {
  //     enabled: router.isReady,
  //     onSuccess: ({ data }) => {
  //       setList(data);
  //     },
  //   },
  // );

  return (
    <AdvertiseBox>
      <TopBox>
        <Typography size="16" fontWeight="bold" color={fontColor}>
          <User color="blue" size="20" fontWeight="bold">
            {getSessionStorage('nickname')}
          </User>
          &nbsp;님
        </Typography>
        <br />
        {score !== '' && (
          <>
            <Typography size="16" fontWeight="bold" color={fontColor}>
              평점
            </Typography>
            <Typography size="16" fontWeight="bold" color={fontColor}>
              <span style={{ color: customColor.blue }}>{score}</span> / 5.0
            </Typography>
          </>
        )}
      </TopBox>

      <BottomBtn
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <Top size="16" fontWeight="bold" color="white">
          Top
        </Top>
      </BottomBtn>
    </AdvertiseBox>
  );
};

export default SideBox;

const AdvertiseBox = styled.div`
  position: fixed;
  width: 120px;
  display: flex;
  flex-direction: column;
  top: 250px;
  right: 25px;
  text-align: center;
  @media screen and (max-width: 1500px) {
    opacity: 0;
    pointer-events: none;
  }
`;

const TopBox = styled.div`
  margin-bottom: 10px;
  width: 100%;
  box-shadow: ${customColor.black}25 4px 4px 4px 0px;
  padding: 15px 15px;
  border-radius: 25px;
`;
const BottomBtn = styled.button`
  width: 100%;
  background-color: ${customColor.blue};
  padding: 3px;
  border-radius: 25px;
  border: 0;
`;

const User = styled(Typography)`
  display: inline-block;
`;
const Top = styled(Typography)`
  display: inline-block;
  :hover {
    color: gray;
  }
`;
