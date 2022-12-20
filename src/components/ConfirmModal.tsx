import { ImCross } from 'react-icons/im';
import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { CustomPagination, Typography } from 'src/components';
import { customColor } from 'src/constants';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { requestApi } from 'src/apis/request';
import { useRouter } from 'next/router';
import { useGetToken } from 'src/hooks/useGetToken';
import { checkModal, infoModal } from 'src/utils/interactionModal';

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
export const ConfirmModal = ({ isOpen, handleCloseModal }: Props) => {
  const [page, setPage] = useState(1);
  const [totalElement, setTotalElement] = useState(0);
  const [list, setList] = useState([]);
  const queryClient = useQueryClient();

  const router = useRouter();
  const { access, refresh } = useGetToken();

  const handlePageChange = (page: number) => {
    setPage(page);
  };


    const { mutate } = useMutation(
      (nickname: string) => requestApi.chooseArtist(router.query.id, {nickname}),
      {
        onSuccess: () => {
          infoModal('신청이 완료되었습니다.', 'success');
          queryClient.invalidateQueries('getItem');
          handleCloseModal();
        },
        onError: (error) => {
          alert('커미션 신청 오류');
          console.log(error)
        },
      },
    );


  function SelectDesigner(nickname:string) {
    checkModal(`${nickname}님에게 신청하시겠습니까?`, () => mutate(nickname));
  }

  useQuery(
    ['getRequestList', router.query.id, access, refresh, page],
    () =>
      requestApi.getRequestUserList(router.query.id, { page }),
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
        onRequestClose={() => handleCloseModal()}
        style={customStyles}
        contentLabel="Confirm Modal"
      >
        <Wrapper>
          <Header>
            <Typography color="blue" size="16" fontWeight="bold">
              신청자 리스트
            </Typography>
            <CustomImCross onClick={() => handleCloseModal()} size={24} />
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
              <CommissionBtn onClick={() => SelectDesigner(data)}>
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
