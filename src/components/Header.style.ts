import styled from 'styled-components';
import { FaUserAlt } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';

export const HeaderBox = styled.div`
  background-color: rgba(7, 104, 159, 1);
  width: 100%;
  height: 60px;
`;

export const ContentBox = styled.div`
  display: flex;
  width: 1178px;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin: auto auto;
`;

export const Theme = styled.a`
  text-decoration: none;
`;

export const Icons = styled.div`
  display: flex;
  width: 100px;
  align-items: center;
  justify-content: space-between;
`;

export const UserImage = styled(FaUserAlt)`
  width: 20px;
  height: 20px;
  color: white;
  padding: 8px 8px;
  border: 4px solid white;
  border-radius: 100%;
  :hover {
    color: gray;
    border: 4px solid gray;
  }
`;

export const AlertImage = styled(FaBell)`
  width: 20px;
  height: 20px;
  color: white;
  padding: 8px 8px;
  border: 4px solid white;
  border-radius: 100%;
  :hover {
    border: 4px solid gray;
    color: gray;
  }
`;
