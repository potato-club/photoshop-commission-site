import { Typography } from '../components/index';
import styled from 'styled-components';
import { List } from 'src/constants/sidebox/SideboxList';
import { RootState } from 'src/redux-toolkit/store';
import { dummyUser } from "src/dummy/dummyUser";
import { useSessionStorage } from 'src/hooks/useSessionStorage';

export const SideBox = () => {
  const {getSessionStorage} = useSessionStorage();

  return (
    <AdvertiseBox>
      <TopBox>
        <Typography size="16" fontWeight="900">
          <User color="blue" size="20" fontWeight="900">
            {getSessionStorage('nickName')}
          </User>
          {' ' + List.user}
        </Typography>
        <br />
        <Typography size="16" fontWeight="900">
          {List.grade}
        </Typography>
        <Typography size="16" fontWeight="900">
          <User color="blue" size="20" fontWeight="900">
            {dummyUser.score}
          </User>
          {List.score}
        </Typography>
      </TopBox>

      <BottomBtn
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <Top size="16" fontWeight="900" color="white">
          {List.top}
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
  box-shadow: rgba(0, 0, 0, 0.25) 4px 4px 4px 0px;
  padding: 15px 15px;
  border-radius: 25px;
`;
const BottomBtn = styled.button`
  width: 100%;
  background-color: rgba(7, 104, 159, 1);
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
