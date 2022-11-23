import React from 'react';
import { Typography } from 'src/components/Typography';
import styled from 'styled-components';
import { formatDate } from 'src/utils/formatDate';
import { useTextMoreView } from 'src/hooks';

type Props = {
  writer: string;
  createdDate: string;
  modifiedDate: string;
  text: string;
};
export const Reply = ({ writer, createdDate, modifiedDate, text }: Props) => {
  const { sliceText, onClickMore, showToggle, toggleText } = useTextMoreView({
    text,
  });

  return (
    <Container>
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
        </ContentsWrapper>
      </div>

      <DateWrapper>
        <Typography size="12">{formatDate(modifiedDate)}</Typography>
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
