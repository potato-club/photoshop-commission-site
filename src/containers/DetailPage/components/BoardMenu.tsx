import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineMore } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux-toolkit/store';
import styled from 'styled-components';
import { MenuItem } from './MenuItem';

export const BoardMenu = () => {
  const [menuToggle, setMenuToggle] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const myPost = useSelector((state: RootState) => state.detailData.myPost);

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
    <MenuWrapper onClick={() => setMenuToggle(true)} ref={menuRef}>
      <AiOutlineMore size={16} />
      {menuToggle && <MenuItem myPost={myPost} />}
    </MenuWrapper>
  );
};

const MenuWrapper = styled.div`
  position: relative;
`;
