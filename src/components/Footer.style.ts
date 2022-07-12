import styled from 'styled-components';
import { Typography } from './Typography';

export const Container = styled.div`
  height: 279px;
  background-color: rgba(7, 104, 159, 0.14);
  position: relative;
  width: 100vw;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 40px;
`;

export const ContentWrapper = styled.div`
  width: 1178px;
  list-style: none;
  margin: 0 auto;
`;


export const Page = styled.a`
  display: inline-block;
  margin-bottom: 9px;
  text-decoration: none;
`;

export const EmailBox = styled.div`
  width: 1178px;
  position: relative;
  margin: 0 auto;
  color: rgba(173, 173, 173, 1);
  font-size: 12px;
  height: 30px;
  `;

export const EmailWrap = styled.div`
  position: absolute;
  right: 0px;
  top: 22px;
  display: flex;
  align-items: center;
`;

export const A = styled.a`
  text-decoration: none;
  `;

export const Email = styled.span`
  margin-right: 15px;
  font-size: 12px;
  `;

export const Line = styled.hr`
  border: 0;
  height: 0.5px;
  background: rgba(173, 173, 173, 1);
  `;

export const NewTypography = styled(Typography)`
  padding: 5px 0 5px 0;
  display: inline-block;
  :hover {
    font-weight: 900;
  }
  `
  export const ContentBox = styled.div`
    list-style: none;
    padding: 0;
    display: flex;
    margin-bottom: 40px;
    justify-content: space-evenly;
  `;

export const ContentUl = styled.ul``;
export const ContentLi = styled.li``;

