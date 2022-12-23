import { ImCross } from 'react-icons/im';
import React, { useEffect } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { Typography } from 'src/components';
import { customColor } from 'src/constants';
import Image from 'next/image';
import { fileDownload } from 'src/utils/filedown';
import { useCheckOutput } from 'src/hooks/useCheckOutput';
import { ImageType } from 'src/types/image.type';
import { checkModal } from 'src/utils/interactionModal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '20px',
    height: '500px',
    width: '550px',
    overflow: 'hidden',
  },
  overlay: {
    background: '#ffffff80',
  },
};
type Props = {
  isOpen: boolean;
  handleCloseModal: () => void;
};
export const OutputModal = ({ isOpen, handleCloseModal }: Props) => {
  const { output } = useCheckOutput();

  const checkDownload = (filename: string) => {
    checkModal('작업물을 다운하시겠습니까?', () => fileDownload(filename), undefined, undefined, '');
  }

  return (
    <Modal
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={() => handleCloseModal()}
      style={customStyles}
      contentLabel="OutputModal Modal"
    >
      <Wrapper>
        <Header>
          <Typography color="blue" size="16" fontWeight="bold">
            결과물 확인하기
          </Typography>
          <CustomImCross onClick={() => handleCloseModal()} size={24} />
        </Header>
        <Guide>
          <Typography color="danger" size="12" fontWeight="bold">
            버튼클릭 시 결과물을 원래크기로 다운받을 수 있습니다
          </Typography>
        </Guide>

        {output && output.image?.length !== 0 ? (
          output.image?.map((data: ImageType, i) => (
            <List key={i}>
              <ImageWrapper>
                <Image
                  src={data.fileUrl}
                  width={100}
                  height={100}
                  alt="thumbnail"
                />
              </ImageWrapper>
              <CommissionBtn onClick={() => checkDownload(data.fileName)}>
                <Typography color="white" size="16" fontWeight="bold">
                  결과물 다운로드
                </Typography>
              </CommissionBtn>
            </List>
          ))
        ) : (
          <NotOutput>
            <Typography size="20" fontWeight="bold">
              업로드된 파일이 없습니다
            </Typography>
          </NotOutput>
        )}
      </Wrapper>
    </Modal>
  );
};


const Wrapper = styled.div`
  background-color: white;
  position: relative;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
`;

const Header = styled.div`
  width: 60%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: flex-end;
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
const CommissionBtn = styled.button`
  background-color: ${customColor.blue};
  border-radius: 16px;
  padding: 8px 20px;
  transition: background-color 200ms ease;
`;

const ImageWrapper = styled.div`
  width: 140px;
  text-align: center;
`;
const List = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Guide = styled.div`
  text-align: end;
`;

const NotOutput = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;