import { useState } from 'react';

export function useModal() {
  // const [requestModalOpen, setRequestModalOpen] = useState(false);
  // const [confirmModalOpen, setConfirmModalOpen] = useState(false);

  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleClosetModal = () => {
    setOpen(false);
  };

  const handleModal = () => {
    setOpen((prev) => !prev);
  }

  return {
    open,
    handleOpenModal,
    handleClosetModal,
    handleModal,
  };
}

export default useModal;
