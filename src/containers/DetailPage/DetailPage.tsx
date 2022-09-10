import React from 'react';
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
};
export function DetailPage({ data }: Props) {
  const {
    requestModalOpen,
    handleCloseRequestModal,
    handleRequestModal,
    confirmModalOpen,
    handleCloseConfirmModal,
    handleConfirmModal,
  } = useModal();
  const {
    title,
    state,
    writer,
    date,
    imageUrls,
    imageSecret,
    contents,
    totalComment,
    commentList,
  } = data;
  return (
    <Container>
      <Wrapper>
        <Header title={title} writer={writer} date={date} state={state} />
        <Contents
          imageUrls={imageUrls}
          contents={contents}
          imageSecret={imageSecret}
        />
        <CommentContainer>
          <CommentHeader totalComment={totalComment} />
          {commentList.map(comment => (
            <Comment
              key={comment.CommentNo}
              writer={comment.writer}
              date={comment.date}
              text={comment.contents}
              reply={comment.reply}
              type="Comment"
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

export default DetailPage;

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
