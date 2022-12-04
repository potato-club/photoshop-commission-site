import React from 'react';
import styled from 'styled-components';
import { customColor } from 'src/constants/customColor';
import {
  Contents,
  Header,
  CommentHeader,
  CustomInput,
} from './components';
import {
  ConfirmModalBtn,
  RequestModalBtn,
} from '../../../src/components/index';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux-toolkit/store';
import { useSessionStorage } from 'src/hooks/useSessionStorage';
import { CommentList } from './CommentList';

export function DetailPage() {
  const myPost = useSelector((state: RootState) => state.detailData.myPost);
  const { getSessionStorage } = useSessionStorage();
  const job = getSessionStorage('job');

  return (
    <Container>
      <Wrapper>
        <Header />
        <Contents />
        <ModalWrapper>
          {myPost && <ConfirmModalBtn />}
          {job === 'designer' && <RequestModalBtn />}
        </ModalWrapper>
        <CommentContainer>
          <CommentHeader />
          <CommentList />
        </CommentContainer>
        <Line />
        <CustomInput type="Board" />
      </Wrapper>
    </Container>
  );
}

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1178px;
  display: flex;
  flex-direction: column;
  padding-bottom: 400px;
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Line = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid ${customColor.gray};
`;
