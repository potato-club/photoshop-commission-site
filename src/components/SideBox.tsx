import { Typography } from '../components/index';
import styled from 'styled-components';
import { dummyUser } from 'src/dummy/dummyUser';
import { useSessionStorage } from 'src/hooks/useSessionStorage';
import { useCurrentMode } from 'src/hooks/useCurrentMode';
import { customColor } from 'src/constants';

export const SideBox = () => {
  const { getSessionStorage } = useSessionStorage();
  const { fontColor } = useCurrentMode();

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
        <Typography size="16" fontWeight="bold" color={fontColor}>
          평점
        </Typography>
        <Typography size="16" fontWeight="bold" color={fontColor}>
          <User color="blue" size="20" fontWeight="bold">
            {dummyUser.score}
          </User>
          /5.0
        </Typography>
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
