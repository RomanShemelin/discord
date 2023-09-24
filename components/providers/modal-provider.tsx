'use client';

import { useEffect, useState } from 'react';

import ServerModal from '@/components/modals/server-modal';
import InviteModal from '@/components/modals/invite-modal';
import EditServerModal from '@/components/modals/edit-server-modal';
import MembersModal from '@/components/modals/members-modal';
import ChannelModal from "@/components/modals/channel-modal";

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
      <MembersModal />
      <ChannelModal />
    </>
  );
};

export default ModalProvider;
