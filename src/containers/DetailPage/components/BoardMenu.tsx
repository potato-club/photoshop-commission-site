import React from 'react'
import styled from "styled-components";
import { customColor } from "src/constants/customColor";
type Props = {
  myPost: boolean;
}
export const BoardMenu = ({ myPost }: Props) => {
  return (
    <Container>
      {myPost ? (
        <p>내글맞음</p>
      ) : (
        <p>내글아님</p>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  width: max-content;
  top: 20px;
  right: 0;
  background-color: ${customColor.white};
`;
