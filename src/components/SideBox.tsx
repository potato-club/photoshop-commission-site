import { Typography } from '../components/index';
import styled from 'styled-components';

export const SideBox = () => {
  return (
    <AdvertiseBox>
      <TopBox>
        <Typography size="16" fontWeight="900">
          <User color="blue" size="20" fontWeight="900">
            임송재
          </User>{' '}
          님
        </Typography>
        <br></br>
        <Typography size="16" fontWeight="900">
          평점
        </Typography>
        <Typography size="16" fontWeight="900">
          <User color="blue" size="20" fontWeight="900">
            3.8
          </User>
          /5.0
        </Typography>
      </TopBox>
      <BottomBtn onClick={() => window.scrollTo(0, 0)}>
        <Top size="16" fontWeight="900" color="white">
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
  left: 1360px;
  text-align: center;
`;

const TopBox = styled.div`
  margin-bottom: 10px;
  width: 100%;
  box-shadow: gray 1px 1px 1px 1px;
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
