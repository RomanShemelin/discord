'use client';

import { useEffect, useState } from 'react';

import ServerModal from '@/components/modals/server-modal';
import InviteModal from '@/components/modals/invite-modal';
import EditServerModal from '@/components/modals/edit-server-modal';
import MembersModal from '@/components/modals/members-modal';
import ChannelModal from '@/components/modals/channel-modal';
import LeaveServerModal from '@/components/modals/ileave-server-modal';
import DeleteServerModal from '@/components/modals/delete-server-modal';
import DeleteChannelModal from '@/components/modals/delete-channel-modal';
import EditChannelModal from '@/components/modals/edit-channel-modal';
import { MessageFileModal } from '../modals/message-file-modal';
import { DeleteMessageModal } from '../modals/delete-message-modal';

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
      <LeaveServerModal />
      <DeleteServerModal />
      <DeleteChannelModal />
      <EditChannelModal />
      <MessageFileModal />
      <DeleteMessageModal />
    </>
  );
};

export default ModalProvider;
