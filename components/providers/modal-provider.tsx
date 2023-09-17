'use client';

import { useEffect, useState } from 'react';

import ServerModal from '@/components/modals/server-modal';
import InviteModal from '@/components/modals/invite-modal';
import EditServerModal from "@/components/modals/edit-server-modal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <ServerModal />
      <InviteModal />
      <EditServerModal /> 
    </>
  );
};

export default ModalProvider;
