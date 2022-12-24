import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Filter } from 'src/constants/filter';
import { BiSearchAlt2 } from 'react-icons/bi';
import { IData } from 'src/containers/mainPage/components/MainRequestBoard';
import { useMoreViewFilterData } from 'src/hooks/useMoreViewFilterData';

interface ITitle {
  setData: React.Dispatch<React.SetStateAction<IData[]>>;
  page: number;
  state: string;
}
const FilterBox = ({ setData, page, state }: ITitle) => {
  const [selected, setSelected] = useState('title');
  const [text, setText] = useState(''); // 필터링 값
  const { filterData } = useMoreViewFilterData({ state, page, selected, text });

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

  useEffect(() => {
    setData(filterData);
  }, [filterData, setData]);

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

export default FilterBox;

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
