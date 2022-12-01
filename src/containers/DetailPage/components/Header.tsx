import React, { useState, useEffect, useRef } from 'react';
import { Typography } from 'src/components/Typography';
import { customColor } from 'src/constants';
import styled from 'styled-components';
import { formatDate } from 'src/utils/formatDate';
import { CheckModifyDate } from './CheckModifyDate';
import { AiOutlineMore } from 'react-icons/ai';
import { BoardMenu } from './BoardMenu';

type Props = {
  title: string;
  writer: string;
  createdDate: string;
  modifiedDate: string;
  state: string;
  myPost: boolean;
};
export function Header({ title, writer, createdDate, modifiedDate, state, myPost }: Props) {
  const [menuToggle, setMenuToggle] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleCloseModal);
    return () => {
      document.removeEventListener('mousedown', handleCloseModal);
    };
  });

  const handleCloseModal = (e: MouseEvent) => {
    if (!menuToggle) return;

    if (!menuRef.current || !menuRef.current.contains(e.target as HTMLElement))
      setMenuToggle(false);
  };

  return (
    <Container>
      <Typography size="12" color="gray">
        {`<< 홈 < ${state} 게시글`}
      </Typography>
      <SpaceBetween>
        <Typography size="32" color="black" fontWeight="bold">
          {title}
        </Typography>
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
        <MenuWrapper onClick={() => setMenuToggle(true)} ref={menuRef}>
          <AiOutlineMore size={16} />
          {menuToggle && <BoardMenu myPost={myPost} />}
        </MenuWrapper>
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
  gap: 4px 0;
`;

const MenuWrapper = styled.div`
  position: relative;
`;
