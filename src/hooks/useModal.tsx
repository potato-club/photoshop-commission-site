import { useState } from 'react';

export function useModal() {
  const [requestModalOpen, setRequestModalOpen] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);

  const handleOpenRequestModal = () => {
    setRequestModalOpen(true);
  };

  const handleOpenConfirmModal = () => {
    setConfirmModalOpen(true);
  };

  const handleCloseRequestModal = () => {
    setRequestModalOpen(false);
  };

  const handleCloseConfirmModal = () => {
    setConfirmModalOpen(false);
  };

  const handleRequestModal = () => {
    setRequestModalOpen(prev => !prev);
  };

  const handleConfirmModal = () => {
    setConfirmModalOpen(prev => !prev);
  };

  return {
    requestModalOpen,
    handleOpenRequestModal,
    handleCloseRequestModal,
    handleRequestModal,
    confirmModalOpen,
    handleOpenConfirmModal,
    handleCloseConfirmModal,
    handleConfirmModal,
  };
}

export default useModal;
