import { customColor } from 'src/constants';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 12px;
  border-bottom: 1px solid ${customColor.gray};
`;
