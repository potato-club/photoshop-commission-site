import styled from 'styled-components';
import {
  CardList,
  Typography,
  SideBox,
  CustomPagination,
} from 'src/components/index';
import { dummyFilter } from 'src/constants/all/filter';
import { dummyList } from 'src/dummy/dummyList';
import { all } from 'src/constants/all/all';
import { BiSearchAlt2 } from 'react-icons/bi';
import React, { useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const StatePage = () => {
  const [text, setText] = useState('');
  const [selected, setSelected] = useState('제목');
  const [page, setPage] = useState(1);
  const offset = useMemo(() => (page - 1) * 15, [page]);
  const router = useRouter();
  const { state } = router.query;
  const [post, setPost] = useState([]); // 데이터 받아와서 저장하는 state

  const handlePageChange = (page: number) => {
    setPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <Container>
      <Post>
        <Typography size="40" color="blue" fontWeight="900">
          {state === 'before' && all.before}
          {state === 'doing' && all.doing}
          {state === 'complete' && all.complete}
          {' ' + all.post}
        </Typography>
      </Post>
      <Title>
        <SelectBox>
          <Select
            onChange={e => {
              setSelected(e.target.value);
              console.log(selected);
            }}
          >
            {dummyFilter.map(item => (
              <option value={item.value} key={item.label}>
                {item.label}
              </option>
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

      <div>
        <Hr />
      </div>
      <div>
        <CardList list={dummyList} offset={offset} limit={15} />
      </div>
      <CustomPagination
        activePage={page}
        onChange={handlePageChange}
        totalItemsCount={dummyList.length}
      />
      <SignUpBox>
        <SignUpComment>
          <Typography size="40" color="blue" fontWeight="900">
            {all.comment}
          </Typography>
        </SignUpComment>
        <Link href={'/signup'} passHref>
          <A>
            <SignUpBtn>
              <Typography size="20" color="white" fontWeight="900">
                {all.writeBtn}
              </Typography>
            </SignUpBtn>
          </A>
        </Link>
      </SignUpBox>
      <SideBox />
    </Container>
  );
};

export default StatePage;

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
  justify-content: end;
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
  padding: 0px 30px 0px 5px;
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
  border: none;
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
const A = styled.a`
  text-decoration: none;
  text-align: center;
`;
