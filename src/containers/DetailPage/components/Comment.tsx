import React, { useState } from 'react';
import { Typography } from 'src/components/Typography';
import { customColor } from 'src/constants';
import styled from 'styled-components';
import { CustomInput } from './CustomInput';
import { useTextMoreView } from 'src/hooks';
import { CheckModifyDate } from './CheckModifyDate';
type Props = {
  writer: string;
  createdDate: string;
  modifiedDate: string;
  text: string;
  parentId: number;
};
export const Comment = ({ writer, createdDate, modifiedDate, text, parentId }: Props) => {
    const { sliceText, onClickMore, showToggle, toggleText } = useTextMoreView({
    text,
  });
  const [openInput, setOpenInput] = useState<boolean>(false);

  return (
    <>
      <Wrapper>
        <div style={{ display: 'flex' }}>
          <WriterWrapper>
            <Typography size="16" fontWeight="bold">
              {writer}
            </Typography>
          </WriterWrapper>
          <ContentsWrapper>
            <Typography size="16" fontHeight="1.2">
              {sliceText()}
              {showToggle && (
                <MoreView onClick={() => onClickMore()}>
                  <Typography size="12" color="gray">
                    {toggleText}
                  </Typography>
                </MoreView>
              )}
            </Typography>
            <ReactionContainer onClick={() => setOpenInput(!openInput)}>
              <Typography size="12" fontWeight="bold" color="gray">
                답글쓰기
              </Typography>
            </ReactionContainer>
          </ContentsWrapper>
        </div>
        <DateWrapper>
          <CheckModifyDate
            createdDate={createdDate}
            modifiedDate={modifiedDate}
          />
        </DateWrapper>
      </Wrapper>
      {openInput && <CustomInput type={'Comment'} parentId={parentId} />}
    </>
  );
};


const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const WriterWrapper = styled.div`
  white-space: nowrap;
  min-width: 160px;
`;
const ContentsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  max-width: 800px;
  flex-direction: column;
  flex-wrap: wrap;
`;

const DateWrapper = styled.div`
  white-space: nowrap;
  margin-right: 12px;
`;

const MoreView = styled.div`
  cursor: pointer;
  display: inline-block;
`;

const ReactionContainer = styled.div`
  cursor: pointer;
  white-space: nowrap;
  margin: 20px 0;
`;
