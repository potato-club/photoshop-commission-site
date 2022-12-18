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
import { useSessionStorage } from 'src/hooks/useSessionStorage';
import { CommentList } from './components/CommentList';
import { BoardType } from 'src/types/board.type';
import { useCheckSelectedArtist } from 'src/hooks/useCheckSelectedArtist';
import { UploadModalBtn } from './components/UploadModalBtn';
import { useCheckWriter } from 'src/hooks/useCheckWriter';
type Props = {
  detailData : BoardType;
}
export function DetailPage({ detailData }: Props) {
  const { getSessionStorage } = useSessionStorage();
  const job = getSessionStorage('job');
  const {title, state, writer, createdDate, modifiedDate, imageUrls, imageOpen, contents, totalComment, commentList} = detailData;
  const { selectedArtist } = useCheckSelectedArtist();
  const { myPost } = useCheckWriter();

  return (
    <Container>
      <Wrapper>
        <Header state={state} title={title} writer={writer} createdDate={createdDate} modifiedDate={modifiedDate} myPost={myPost}/>
        <Contents imageOpen={imageOpen} imageUrls={imageUrls} contents={contents}/>
        <ModalWrapper>
          {myPost && <ConfirmModalBtn />}
          {job === 'ARTIST' && <RequestModalBtn />}
          {selectedArtist && <UploadModalBtn />}
        </ModalWrapper>
        <CommentContainer>
          <CommentHeader totalComment={totalComment}/>
          <CommentList commentList={commentList}/>
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
