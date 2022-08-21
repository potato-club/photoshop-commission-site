import { useState } from 'react';

export function useModal() {
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => {
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleModal = () => {
    setModalOpen(prev => !prev);
  };

  return { modalOpen, handleOpenModal, handleCloseModal, handleModal };
}

export default useModal;
