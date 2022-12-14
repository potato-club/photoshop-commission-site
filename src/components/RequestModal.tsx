import { ImCross } from 'react-icons/im';
import { AiFillEdit } from 'react-icons/ai';
import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { Typography } from 'src/components';
import { customColor } from 'src/constants';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '20px',
    height: '250px',
    width: '450px',
    overflow: 'hidden',
  },
  overlay: {
    background: '#ffffff80',
  },
};
type Props = {
  isOpen: boolean;
  handleClosetModal: () => void;
};
export const RequestModal = ({ isOpen, handleClosetModal }: Props) => {
  return (
    <div>
      <Modal
        ariaHideApp={false}
        isOpen={isOpen}
        onRequestClose={() => handleClosetModal()}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Wrapper>
          <IconWrapper justify="flex-end">
            <CustomImCross onClick={() => handleClosetModal()} />
          </IconWrapper>
          <IconWrapper justify="center">
            <AiFillEdit size={48} />
          </IconWrapper>
          <Typography size="28" color="black" fontWeight="900">
            등록 하시겠습니까?
          </Typography>
          <ButtonWrapper>
            <Button color={customColor.blue} margin={true}>
              <Typography size="16" color="white">
                예
              </Typography>
            </Button>
            <Button
              color={customColor.danger}
              onClick={() => handleClosetModal()}
            >
              <Typography size="16" color="white">
                아니요
              </Typography>
            </Button>
          </ButtonWrapper>
        </Wrapper>
      </Modal>
    </div>
  );
};

export default RequestModal;

const Wrapper = styled.div`
  align-items: center;
  background-color: white;
  position: relative;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px 0;
`;

const IconWrapper = styled.div<{ justify?: string }>`
  width: 100%;
  display: flex;
  justify-content: ${({ justify }) => justify};
`;

const CustomImCross = styled(ImCross)`
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
  :active {
    transform: scale(0.9);
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
const Button = styled.button<{ color: string; margin?: boolean }>`
  width: ${prop => (prop.margin ? '40px' : '70px')};
  padding: 5px 0px;
  background-color: ${prop => prop.color};
  margin-right: ${prop => (prop.margin ? '10px' : '0px')};
  border: none;
  border-radius: 5px;
  :active {
    position: relative;
    top: 1px;
    left: 0.5px;
  }
  :hover {
    background-color: black;
    cursor: pointer;
  }
`;
