import { ImCross } from 'react-icons/im';
import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { CustomPagination, Typography } from 'src/components';
import { customColor } from 'src/constants';
import { useQuery } from 'react-query';
import { requestApi } from 'src/apis/request';
import { useRouter } from 'next/router';
import { useGetToken } from 'src/hooks/useGetToken';

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
  handleClosetModal: () => void;
};
export const ConfirmModal = ({ isOpen, handleClosetModal }: Props) => {
  const [page, setPage] = useState(1);
  const [totalElement, setTotalElement] = useState(0);

  const router = useRouter();
  const { access, refresh } = useGetToken();

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const [list, setList] = useState([]);

  function SelectDesigner() {
    // axios.post('api', data).then(res => console.log(res));
    console.log(list);
  }

  useQuery(
    ['getRequestList', router.query.id, access, refresh, page],
    () =>
      requestApi.getRequestUserList(router.query.id, { page }, access, refresh),
    {
      enabled: isOpen,
      onSuccess: ({ data: { content, totalElements } }) => {
        const nicknames = content.map(
          (data: { nickname: string }) => data['nickname'],
        );
        setList(nicknames);
        if (totalElement !== totalElements) {
          setTotalElement(totalElements);
        }
      },
      onError: error => {
        alert('리스트 가져오기 오류');
        return false;
      },
    },
  );

  return (
    <div>
      <Modal
        ariaHideApp={false}
        isOpen={isOpen}
        onRequestClose={() => handleClosetModal()}
        style={customStyles}
        contentLabel="Confirm Modal"
      >
        <Wrapper>
          <Header>
            <Typography color="blue" size="16" fontWeight="bold">
              신청자 리스트
            </Typography>
            <CustomImCross onClick={() => handleClosetModal()} size={24} />
          </Header>
          <Guide>
            <Typography color="danger" size="12" fontWeight="bold">
              의뢰는 1명에게만 맡길 수 있습니다.
            </Typography>
          </Guide>
          {list.map((data, i) => (
            <List key={i}>
              <NickName>
                <Typography color="black" size="16" fontWeight="bold">
                  {data}
                </Typography>
              </NickName>
              <CommissionBtn onClick={SelectDesigner}>
                <Typography color="white" size="16" fontWeight="bold">
                  의뢰 맡기기
                </Typography>
              </CommissionBtn>
            </List>
          ))}
          <CustomPagination
            totalItemsCount={totalElement}
            onChange={handlePageChange}
            activePage={page}
            itemsCountPerPage={5}
          />
        </Wrapper>
      </Modal>
    </div>
  );
};

export default ConfirmModal;

const Wrapper = styled.div`
  background-color: white;
  position: relative;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
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
  cursor: pointer;
  :hover {
    background-color: ${customColor.lightBlue};
    transform: scale(1.01);
  }
  :active {
    transform: scale(0.99);
  }
  transition: background-color 200ms ease;
`;
const Date = styled.div`
  text-align: center;
`;

const NickName = styled.div`
  width: 140px;
  text-align: center;
  div {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
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
