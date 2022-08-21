import { ImCross } from 'react-icons/im';
import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { CustomPagination, Typography } from 'src/components';
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
    height: '500px',
    width: '550px',
    overflow: 'hidden',
  },
  overlay: {
    background: '#ffffff80',
  },
};

interface IRequestModal {
  modalOpen: boolean;
  handleCloseModal: () => void;
}
export const RequestModal = ({
  modalOpen,
  handleCloseModal,
}: IRequestModal) => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; // 신청자 리스트 정보(dummy)받아와야함
  const offset = 5;
  const [page, setPage] = useState(1);
  const handlePageChange = (page: number) => {
    setPage(page);
  };

  function SelectDesigner() {
    // axios.post('api', data).then(res => console.log(res));
    console.log(list);
  }

  return (
    <div>
      <Modal
        ariaHideApp={false}
        isOpen={modalOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Container>
          <Header>
            <Theme>
              <NewTypography color="blue" size="16" fontWeight="900">
                신청자 리스트
              </NewTypography>
            </Theme>
            <CustomImCross onClick={handleCloseModal} size={24} />
          </Header>
          <Guide>
            <Typography color="gray" size="16">
              의뢰는 1명에게만 맡길 수 있습니다.
            </Typography>
          </Guide>
          {list.slice((page - 1) * offset, page * offset).map(userInfo => (
            <List key={userInfo}>
              <Date>
                <Typography color="gray" size="16">
                  2022.08.12
                  <br />
                  08:03
                </Typography>
              </Date>
              <NickName>
                <Typography color="black" size="16" fontWeight="900">
                  양파먹는 소녀
                </Typography>
              </NickName>
              <CommissionBtn onClick={SelectDesigner}>
                <Typography color="white" size="16" fontWeight="900">
                  의뢰 맡기기
                </Typography>
              </CommissionBtn>
            </List>
          ))}
          <CustomPagination
            itemClass="testPage"
            totalItemsCount={15}
            onChange={handlePageChange}
            activePage={page}
            itemsCountPerPage={offset}
          />
        </Container>
      </Modal>
    </div>
  );
};

export default RequestModal;

const CustomImCross = styled(ImCross)`
  cursor: pointer;

  &:hover {
    color: ${customColor.gray};
  }
`;
const CommissionBtn = styled.button`
  border: none;
  background-color: green;
  border-radius: 15px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: ${customColor.success};
  }
`;
const Date = styled.div`
  text-align: center;
`;

const NickName = styled.div`
  position: relative;
  right: 30px;
`;
const List = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const NewTypography = styled(Typography)`
  font-family: Arial, Helvetica, sans-serif;
`;
const Guide = styled.div`
  text-align: end;
  margin-bottom: 30px;
  margin-top: 10px;
`;
const Theme = styled.div`
  font-size: 16px;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: fit-content;
  font-weight: 900;
`;
const Header = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Container = styled.div`
  background-color: white;
  position: relative;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;
