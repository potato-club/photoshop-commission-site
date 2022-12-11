import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Filter } from 'src/constants/all/filter';
import { BiSearchAlt2 } from 'react-icons/bi';
import axios from 'axios';
import { useQuery } from 'react-query';
import { stateApi } from 'src/apis/moreViewPage';
import { IData } from 'src/containers/mainPage/components/MainRequestBoard';

interface ITitle {
  setData: React.Dispatch<React.SetStateAction<IData[]>>;
  page: number;
  state: string;
}
const Title = ({ setData, page, state }: ITitle) => {
  const [text, setText] = useState(''); // 필터링 값
  const [selected, setSelected] = useState('title');
  useQuery(
    ['resetFilter', state],
    async () => {
      if (state === 'before') {
        return await stateApi.getBeforeAll(page);
      } else if (state === 'doing') {
        return await stateApi.getCompleteAll(page);
      } else if (state === 'complete') {
        return await stateApi.getRequestingAll(page);
      }
    },
    {
      enabled: text === '',
      onSuccess: res => setData(res && res.data.content),
    },
  );

  useQuery(
    ['filter', selected, text, page],
    async () => {
      if (selected === 'nickname') {
        return await stateApi.getFilterNickName(text, page);
      } else if (selected === 'title') {
        return await stateApi.getFilterTitle(text, page);
      }
    },
    {
      enabled: !!selected && !!page && !!text && text !== '',
      onSuccess: res => setData(res?.data.content),
    },
  );

  const onChangeInput = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setText(e.currentTarget.value);
    },
    [setText],
  );
  const onChangeSelect = useCallback(
    (e: React.FormEvent<HTMLSelectElement>) => {
      setSelected(e.currentTarget.value);
    },
    [setSelected],
  );

  return (
    <Container>
      <SelectBox>
        <Select onChange={onChangeSelect}>
          {Filter.map(item => (
            <option value={item.value} key={item.label}>
              {item.label}
            </option>
          ))}
        </Select>
        <SelectInput
          type="text"
          value={text}
          placeholder="검색할 내용 입력"
          onChange={onChangeInput}
        />
        <SearchIcon />
      </SelectBox>
    </Container>
  );
};

export default Title;

const Container = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 10px 10px;
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
