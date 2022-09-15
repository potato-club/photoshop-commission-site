import React, { useState } from 'react';
import { Typography } from 'src/components/Typography';
import { customColor } from 'src/constants';
import styled from 'styled-components';
import { formatDate } from 'src/utils/formatDate';
import { CustomInput } from './CustomInput';
import { ReplyType } from 'src/types/comments.type';

type Props = {
  writer: string;
  date: Date;
  text: string;
};
export const Reply = ({ writer, date, text }: Props) => {

   const limitNumber = 150;
   const [limit, setLimit] = useState(limitNumber);
  const showToggle = text.length > limit ? true : false;
   const [toggleText, setToggleText] = useState<' ...더보기' | ' 닫기'>(
     ' ...더보기',
   );

   const onClickMore = (str: string) => {
     if (toggleText === ' ...더보기') {
       setLimit(str.length - 1); // * 토글을 보여주기 위해 length 에서 1을 뺌
       setToggleText(' 닫기');
     } else {
       setLimit(limitNumber);
       setToggleText(' ...더보기');
     }
   };

   const sliceText = (str: string) => {
     return str.slice(0, limit + 1); // * 토글을 보여주기 위해 위에서 뺀값 1을 더함
   };;
  return (
    <Container>
      <div style={{display: 'flex'}}>
        <WriterWrapper>
          <Typography size="16" fontWeight="bold">
            {writer}
          </Typography>
        </WriterWrapper>
        <ContentsWrapper>
          <Typography size="16" fontHeight="1.2">
            {sliceText(text)}
            {showToggle && (
              <MoreView onClick={() => onClickMore(text)}>
                <Typography size="12" color="gray">
                  {toggleText}
                </Typography>
              </MoreView>
            )}
          </Typography>
        </ContentsWrapper>
      </div>

      <DateWrapper>
        <Typography size="12">{formatDate(date)}</Typography>
      </DateWrapper>
    </Container>
  );
};

const Container = styled.div`
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
  max-width: 600px;
  flex-wrap: wrap;
`;

const MoreView = styled.div`
  cursor: pointer;
  display: inline-block;
`;

const DateWrapper = styled.div`
  white-space: nowrap;
`;
