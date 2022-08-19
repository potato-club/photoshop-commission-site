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
import axios from 'axios';
import { pathName } from 'src/constants/pathName';

const StatePage = () => {
  const [text, setText] = useState(''); // 필터링 값
  const [selected, setSelected] = useState('title');
  const [page, setPage] = useState(1);
  const offset = useMemo(() => (page - 1) * 16, [page]);
  const router = useRouter();
  const { state } = router.query;
  const [post, setPost] = useState([]); // 데이터 받아와서 저장하는 state

  const handlePageChange = (page: number) => {
    setPage(page);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<any>,
  ) => {
    e.preventDefault();
    let data = {
      option: selected,
      text: text,
    };
    console.log(data);
    // axios.get('api', data).then(res => console.log(res));
    setText('');
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
        <SelectBox onSubmit={handleSubmit}>
          <Select
            onChange={e => {
              setSelected(e.target.value);
            }}
          >
            {dummyFilter.map(item => (
              <option value={item.value} key={item.label}>
                {item.label}
              </option>
            ))}
          </Select>
          <SelectInput
            type="text"
            value={text}
            placeholder="검색할 내용 입력"
            onChange={e => {
              setText(e.target.value);
            }}
          />
          <SearchIcon onClick={handleSubmit} />
        </SelectBox>
      </Title>

      <div>
        <Hr />
      </div>
      <CardListWrap>
        <CardList list={dummyList} offset={offset} limit={16} />
      </CardListWrap>
      <CustomPagination
        itemClass="page"
        activePage={page}
        onChange={handlePageChange}
        totalItemsCount={dummyList.length}
        itemsCountPerPage={15}
      />
      <SignUpBox>
        <SignUpComment>
          <Typography size="40" color="blue" fontWeight="900">
            {all.comment}
          </Typography>
        </SignUpComment>
        <Link href={pathName.SIGNUP} passHref>
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
  margin-top: 130px;
  margin-bottom: 150px;
`;

const SignUpComment = styled.div`
  text-align: center;
`;

const SelectBox = styled.form`
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
