import { useState } from 'react';

export function useModal() {
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => {
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return { modalOpen, handleOpenModal, handleCloseModal };
}

export default useModal;
