import styled from 'styled-components';
import {
  CardList,
  Typography,
  SideBox,
  CustomPagination,
} from 'src/components/index';
import React from 'react';
import Hr from './components/Hr';
const StatePage = (props: any) => {

  const handlePageChange = (page: number) => {
    props.setPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <Container>
      <Title>
        <Typography size="40" color="blue" fontWeight="bold">
          {props.theme}
        </Typography>
      </Title>
      {/* <FilterBox setData={setData} page={page} state={state as string} /> */}
      <Hr />
      <CardListWrap>
        <CardList list={props.data} />
      </CardListWrap>
      <CustomPagination
        itemClass="page"
        activePage={props.page}
        onChange={handlePageChange}
        totalItemsCount={props.total || 0}
        itemsCountPerPage={16}
      />
      <SideBox />
    </Container>
  );
};

export default StatePage;

const CardListWrap = styled.div`
  margin-bottom: 130px;
`;
const Container = styled.div`
  width: 1178px;
  margin: 0 auto;
  padding: 140px 0;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  margin-bottom: 105px;
  text-align: center;
`;
