import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineMore } from 'react-icons/ai';
import styled from 'styled-components';
import { MenuItem } from './MenuItem';
type Props = {
  myPost: boolean;
}
export const BoardMenu = ({myPost}:Props) => {
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
    <MenuWrapper onClick={() => setMenuToggle(true)} ref={menuRef}>
      <AiOutlineMore size={16} />
      {menuToggle && <MenuItem myPost={myPost} />}
    </MenuWrapper>
  );
};

const MenuWrapper = styled.div`
  position: relative;
`;
