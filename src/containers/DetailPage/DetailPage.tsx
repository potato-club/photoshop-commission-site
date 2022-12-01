import React, {useEffect} from 'react';
import styled from 'styled-components';
import { customColor } from 'src/constants/customColor';
import {
  Contents,
  Header,
  CommentHeader,
  Comment,
  CustomInput,
} from './components';
import { BoardType } from 'src/types/board.type';
import {
  ConfirmModalBtn,
  ConfirmModal,
  RequestModalBtn,
  RequestModal,
} from '../../../src/components/index';
import useModal from 'src/hooks/useModal';
type Props = {
  data: BoardType;
  myPost: boolean;
};
export function DetailPage({ data, myPost }: Props) {
  const { requestModalOpen, handleCloseRequestModal, handleRequestModal, confirmModalOpen, handleCloseConfirmModal, handleConfirmModal, } = useModal();
  const { title, state, writer, createdDate, modifiedDate, imageUrls, imageOpen, contents, totalComment, commentList, } = data;

  useEffect(() => {
    console.log(myPost)
  }, [myPost])

  return (
    <Container>
      <Wrapper>
        <Header
          title={title}
          writer={writer}
          createdDate={createdDate}
          modifiedDate={modifiedDate}
          state={state}
        />
        <Contents
          imageUrls={imageUrls}
          contents={contents}
          imageOpen={imageOpen}
        />
        <CommentContainer>
          <CommentHeader totalComment={totalComment} />
          {commentList.map(comment => (
            <Comment
              key={comment.id}
              parentId={comment.id}
              writer={comment.nickname}
              createdDate={comment.createdDate}
              modifiedDate={comment.modifiedDate}
              text={comment.comment}
              reply={comment.children}
            />
          ))}
          <ModalWrapper>
            <div style={{ marginBottom: '15px' }}>
              <ConfirmModalBtn handleModal={handleConfirmModal} />
              <ConfirmModal
                modalOpen={confirmModalOpen}
                handleCloseModal={handleCloseConfirmModal}
              />
            </div>
            <div>
              <RequestModalBtn handleModal={handleRequestModal} />
              <RequestModal
                modalOpen={requestModalOpen}
                handleCloseModal={handleCloseRequestModal}
              />
            </div>
          </ModalWrapper>
        </CommentContainer>
        <Line />
        <CustomInput type="Board" />
      </Wrapper>
    </Container>
  );
}

const ModalWrapper = styled.div`
  position: absolute;
  top: -85px;
  right: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  &:nth-child(0) {
    margin-bottom: 10px;
  }
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
