import { useState } from 'react';
import { CustomPagination, Typography } from 'src/components';
import { customColor } from 'src/constants';
import useModal from 'src/hooks/useModal';
import styled from 'styled-components';
import { MyPageLayout } from '../components/MyPageLayout';
import ModalPostReview from './modals/ModalPostReview';

export const MyReview = () => {
  const [page, setPage] = useState(1);

  const handlePageChange = (page: number) => {
    setPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <MyPageLayout>
      <Container>
        <Title>
          <Typography size="20" fontWeight="bold">
            현재 의뢰받고 있는 게시글
          </Typography>
          <Typography size="12" fontWeight="bold" color={'danger'}>
            디자이너에게 결과물을 받으면 의뢰완료를 눌러주십시오.
          </Typography>
        </Title>
        <ListTableContainer>
          <ListHeader>
            <Header style={{ flex: 0.3 }}>
              <Typography size="16" color="gray">
                작성 날짜
              </Typography>
            </Header>
            <Header style={{ flex: 1 }}>
              <Typography size="16" color="gray">
                글 제목
              </Typography>
            </Header>
            <Header style={{ flex: 0.4 }}>
              <Typography size="16" color="gray">
                담당 디자이너
              </Typography>
            </Header>
            <Header style={{ flex: 0.3 }}>
              <Typography size="16" color="gray">
                의뢰완료 버튼
              </Typography>
            </Header>
          </ListHeader>
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
        </ListTableContainer>
        <CustomPagination
          activePage={page}
          onChange={handlePageChange}
          totalItemsCount={20}
        />
      </Container>
    </MyPageLayout>
  );
};

const ReviewItem = () => {
  const { isOpen, handleOpenModal, handleClosetModal } = useModal();
  return (
    <ItemContainer>
      <Item style={{ flex: 0.3 }}>
        <Typography size="14">2022.03.18</Typography>
      </Item>
      <ItemBoardTitle style={{ flex: 1 }}>
        <Typography size="14">아니 피자좀 없애주세요 제에에ㅔ에에발</Typography>
      </ItemBoardTitle>
      <ItemDesigner style={{ flex: 0.4 }}>
        <Typography size="14" color="blue" fontWeight="bold">
          양파버리는소년
        </Typography>
      </ItemDesigner>
      <Item style={{ flex: 0.3 }}>
        <Button onClick={handleOpenModal}>후기남기기</Button>
      </Item>
      <ModalPostReview isOpen={isOpen} handleClosetModal={handleClosetModal} />
    </ItemContainer>
  );
};

const Container = styled.div`
  width: 100%;
`;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 20px;
`;

const ListTableContainer = styled.div`
  width: 100%;
  border-top: 1px solid #8d8d8d;
  border-bottom: 1px solid #8d8d8d;
`;
const ListHeader = styled.div`
  display: flex;
  padding-top: 13px;
  padding-bottom: 13px;
`;
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemContainer = styled.div`
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid #d5d5d5;
  :hover {
    background-color: #ebebeb;
  }
`;
const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ItemDesigner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const ItemBoardTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Button = styled.button`
  border-radius: 10px;
  border: none;
  padding: 10px 15px;
  background-color: ${customColor.white};
  border: 1px solid ${customColor.blue};
  color: ${customColor.blue};

  :hover {
    cursor: pointer;
    background-color: ${customColor.blue};
    border: 1px solid ${customColor.blue};
    color: ${customColor.white};
  }
`;
