import { ImCross } from 'react-icons/im';
import React, { useRef, useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { Typography } from 'src/components';
import { customColor } from 'src/constants';
import { errorModal } from 'src/utils/interactionModal';
import { Rating } from 'react-simple-star-rating';
import { useQueryPostReview } from '../hooks/useQueryPostReview';
import { MyReviewType } from '../hooks/useQueryGetMyReview';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '20px',
    height: '360px',
    width: '700px',
    overflow: 'hidden',
  },
  overlay: {
    background: '#00000080',
  },
};
type Props = {
  isOpen: boolean;
  handleClosetModal: () => void;
  item: MyReviewType;
};

const ModalPostReview = ({ isOpen, handleClosetModal, item }: Props) => {
  const reviewInputRef = useRef<HTMLTextAreaElement>(null);
  const [rate, setRate] = useState(0);
  const { refetch, isError, isLoading } = useQueryPostReview({
    roomId: item.roomId,
    content: reviewInputRef && reviewInputRef.current!.value,
    grade: String(rate),
  });

  const handleClickSubmitReview = () => {
    if (reviewInputRef) {
      if (reviewInputRef.current!.value === '')
        errorModal('후기를 입력해주세요');
      else {
        refetch();
        location.reload();
      }
    }
  };

  const handleRating = (rate: number) => {
    setRate(rate);
  };

  return (
    <Modal
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={handleClosetModal}
      style={customStyles}
      contentLabel="Confirm Modal"
    >
      <Wrapper>
        <Header>
          <Typography color="blue" size="16" fontWeight="bold">
            디자이너에게 후기 남기기
          </Typography>
          <CustomImCross onClick={() => handleClosetModal()} size={24} />
        </Header>
        <Body>
          <Row>
            <Label>
              <Typography color="gray" size="16">
                게시글 제목
              </Typography>
            </Label>
            <Content>
              <Typography color="black" size="16">
                {item.title}
              </Typography>
            </Content>
          </Row>
          <Row>
            <Label>
              <Typography color="gray" size="16">
                담당 디자이너
              </Typography>
            </Label>
            <Content>
              <Typography color="black" size="16">
                {item.selectedArtistNickname}
              </Typography>
            </Content>
          </Row>
          <Row>
            <Label>
              <Typography color="gray" size="16">
                평점
              </Typography>
            </Label>
            <Content>
              <Rating
                onClick={handleRating}
                size={40}
                allowFraction
                transition
                fillColor="orange"
                emptyColor="gray"
              />
            </Content>
          </Row>
          <Row>
            <Label>
              <Typography color="gray" size="16">
                후기
              </Typography>
            </Label>
            <Input ref={reviewInputRef} placeholder="후기을 입력해주세요" />
          </Row>
        </Body>
        <Footer>
          <Button onClick={handleClickSubmitReview}>후기 남기기</Button>
        </Footer>
      </Wrapper>
    </Modal>
  );
};

export default ModalPostReview;

const Button = styled.button`
  border-radius: 10px;
  border: none;
  padding: 10px 15px;
  background-color: ${customColor.blue};
  color: ${customColor.white};

  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  :active {
    transform: scale(0.9);
  }
`;
const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Row = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
`;
const Label = styled.div`
  width: 17%;
  text-align: right;
`;
const Content = styled.div`
  flex: 1;
`;

const Input = styled.textarea`
  flex: 1;
  box-sizing: border-box;
  height: 100px;
  padding: 12px 80px 0 16px;
  outline: none;
  border: none;
  border: 1px solid ${customColor.gray};
  border-radius: 10px;
  font-size: 16px;
  ::placeholder {
    color: ${customColor.gray};
  }
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Wrapper = styled.div`
  background-color: white;
  position: relative;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Header = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CustomImCross = styled(ImCross)`
  position: absolute;
  top: 0px;
  right: 0;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
  :active {
    transform: scale(0.9);
  }
`;
