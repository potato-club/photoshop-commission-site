import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  width: 270px;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 12.25px;
  margin-right: 12.25px;
`;

export const PhotoBox = styled.div`
  width: 100%;
`;

export const NewImage = styled(Image)`
  border-radius: 20px;
`;

export const ThemeBox = styled.div`
  width: 100%;
  height: 19px;
  margin-top: 5px;
`;

export const NameDateBox = styled.div`
  margin-top: 4px;
  width: 100%;
  height: 19px;
  display: flex;
  justify-content: space-between;
`;

export const A = styled.a`
  text-decoration: none;
`;

export const Name = styled.div``;

export const Date = styled.div``;
