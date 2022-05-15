import { NextPage } from 'next';
import styled from 'styled-components';
import { CardList, Typography, SideBox } from 'src/components/index';
import { dummyFilter } from 'src/dummy/dummyFilter';
import { BiSearchAlt2 } from 'react-icons/bi';
import React, { useState } from 'react';
import Page from 'src/components/Page';

const Before: NextPage = () => {
  const [text, setText] = useState('');
  const [selected, setSelected] = useState('제목');
  const [page, setPage] = useState<number>(1);
  const offset = (page - 1) * 15;
  const [post, setPost] = useState([]); // 데이터 받아와서 저장하는 state

  const handlePageChange = (page: number) => {
    setPage(page);
    console.log(page);
  };

  return (
    <Container>
      <Post>
        <Typography size="40" color="blue" fontWeight="900">
          의뢰중 게시글
        </Typography>
      </Post>
      <Title>
        <Typography size="16">필터</Typography>
        <SelectBox>
          <Select
            onChange={e => {
              setSelected(e.target.value);
              console.log(selected);
            }}
          >
            {dummyFilter.map(item => (
              <Option value={item.value} key={item.label}>
                {item.label}
              </Option>
            ))}
          </Select>
          <SelectInput
            placeholder="검색할 내용 입력"
            onChange={e => {
              setText(e.target.value);
            }}
          />
          <SearchIcon onClick={() => {}} />
        </SelectBox>
      </Title>

      <Div>
        <Hr />
      </Div>
      <RequestBox>
        <CardList
          offset={offset}
          limit={15}
        />
      </RequestBox>
      <Page page={page} handlePageChange={handlePageChange} />
      <SignUpBox>
        <SignUpComment>
          <Typography size="40" color="blue" fontWeight="900">
            원하시는 사진을 수정하고 싶으시다면 지금 바로 신청해주세요!
          </Typography>
        </SignUpComment>
        <SignUpBtn>
          <Typography size="20" color="white" fontWeight="900">
            의뢰 작성하기
          </Typography>
        </SignUpBtn>
      </SignUpBox>
      <SideBox />
    </Container>
  );
};

export default Before;

const Div = styled.div``;
const Option = styled.option``;
const Container = styled.div`
  width: 1178px;
  margin: 0 auto;
  padding: 140px 0;
  display: flex;
  flex-direction: column;
`;

const Post = styled.div`
  margin-bottom: 105px;
  text-align: center;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 10px;
`;

const SignUpBox = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  flex-direction: column;
  margin-bottom: 150px;
`;

const SignUpComment = styled.div`
  text-align: center;
`;

const SelectBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Select = styled.select`
  margin-right: 10px;
  display: inline-block;
  height: 36px;
  border-radius: 4px;
  width: 70px;
`;

const SelectInput = styled.input`
  height: 36px;
  font-size: 16px;
  border-color: hsl(0, 0%, 80%);
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  padding: 0;
  ::placeholder {
    color: gray;
    font-size: 12px;
  }
  :focus {
    border-color: #2684ff;
    outline: #2684ff;
  }
`;

const SignUpBtn = styled.button`
  margin: 60px auto 0 auto;
  width: 185px;
  background-color: rgba(7, 104, 159, 1);
  border-radius: 10px;
  padding: 10px 27px;
  :hover {
    background-color: black;
  }
`;

const SearchIcon = styled(BiSearchAlt2)`
  position: absolute;
  right: 3px;
  top: 7px;
  font-size: 27px;
  :hover {
    color: gray;
  }
`;
const Hr = styled.hr`
  margin-bottom: 20px;
`;

const RequestBox = styled.div``;
