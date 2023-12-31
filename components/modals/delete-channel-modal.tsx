import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import qs from 'query-string';
import { useState } from 'react';
import { useModal } from '../hooks/use-modal-store';
import { Button } from '../ui/button';

const DeleteChannelModal = () => {
  const { onOpen, isOpen, onClose, type, data } = useModal();
  const router = useRouter();
  const { server, channel } = data;
  const [isLoading, setIsLoading] = useState(false);

  const isModalOpen = isOpen && type === 'deleteChannel';

  const leaveServer = async () => {
    try {
      setIsLoading(true);
      const url = qs.stringifyUrl({
        url: `/api/channels/${channel?.id}`,
        query: { serverId: server?.id },
      });
      await axios.delete(url);
      onClose();
      router.refresh();
      router.push(`/servers/${server?.id}`);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className='bg-white text-black p-0 overflow-hidden'>
        <DialogHeader className='pt-8 px-6'>
          <DialogTitle className='text-center text-2xl font-bold'>
            Delete Channel
          </DialogTitle>
          <DialogDescription className='text-center'>
            Are you sure you want to do this ?{' '}
            <span className='text-semibold text-indigo-500'>
              #{channel?.name}
            </span>{' '}
            will be permanently deleted.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className='bg-gray-100 px-6 py-4'>
          <div className='flex items-center justify-between w-full'>
            <Button disabled={isLoading} variant='ghost' onClick={onClose}>
              Cancel
            </Button>
            <Button
              disabled={isLoading}
              variant='primary'
              onClick={leaveServer}
            >
              Confirm
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteChannelModal;
