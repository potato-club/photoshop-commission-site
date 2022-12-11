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
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '20px',
    marginTop: '10px',
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
        <Container>
          <CustomImCross onClick={() => handleClosetModal()} />

          <CustomAiFillEdit />
          <Typography size="28" color="black" fontWeight="900">
            등록 하시겠습니까?
          </Typography>
          <ButtonWrapper>
            <Button color={customColor.blue} margin={true}>
              <Typography size="16" color="white">
                예
              </Typography>
            </Button>
            <Button color={customColor.danger} onClick={()=>handleClosetModal()}>
              <Typography size="16" color="white">
                아니요
              </Typography>
            </Button>
          </ButtonWrapper>
        </Container>
      </Modal>
    </div>
  );
};

export default RequestModal;

const CustomAiFillEdit = styled(AiFillEdit)`
  margin: 20px 0px 20px 0px;
  font-size: 48px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 40px;
`;
const Button = styled.button<{ color: string; margin?: boolean }>`
  width: ${prop => (prop.margin ? '40px' : '70px')};
  padding: 5px 0px;
  background-color: ${prop => prop.color};
  margin-right: ${prop => (prop.margin ? '10px' : '0px')};
  border: none;
  border-radius: 5px;
  &:active {
    position: relative;
    top: 1px;
    left: 0.5px;
  }
  &:hover {
    background-color: black;
    cursor: pointer;
  }
`;
const CustomImCross = styled(ImCross)`
  cursor: pointer;
  position: absolute;
  right: 0;
  &:hover {
    color: ${customColor.gray};
  }
`;
const Container = styled.div`
  align-items: center;
  background-color: white;
  position: relative;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
