import React from 'react';
import { Typography } from 'src/components/Typography';
import { customColor } from 'src/constants';
import styled from 'styled-components';
import { CheckModifyDate } from './CheckModifyDate';
import { BoardMenu } from './BoardMenu';
type Props = {
  state: string;
  title: string;
  writer: string;
  createdDate: string;
  modifiedDate: string;
  myPost?: boolean;
};

export function Header({ state, title, writer, createdDate, modifiedDate, myPost} : Props) {
  return (
    <Container>
      <Typography size="12" color="gray">
        {`<< 홈 < ${state} 게시글`}
      </Typography>
      <SpaceBetween>
        <TitleWrapper>
          <Typography size="32" color="black" fontWeight="bold">
            {title}
          </Typography>
        </TitleWrapper>
        <WriterWrapper>
          <Typography size="16" color="black">
            {writer}
          </Typography>
          <CheckModifyDate
            createdDate={createdDate}
            modifiedDate={modifiedDate}
          />
        </WriterWrapper>
      </SpaceBetween>
      <SpaceBetween>
        <Typography size="20" color="purple">
          {state}
        </Typography>
        {myPost !== undefined && <BoardMenu myPost={myPost}/>}
      </SpaceBetween>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  padding: 0 16px 24px 16px;
  > div:first-child {
    margin-top: 40px;
  }
  border-bottom: 1px solid ${customColor.gray};
`;

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const WriterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-self: flex-start;
  gap: 4px 0;
`;

const TitleWrapper = styled.div`
  width: 100%;
  max-width: 800px;
`;
