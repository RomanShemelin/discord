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
import { useState } from 'react';
import { useModal } from '../hooks/use-modal-store';
import { Button } from '../ui/button';

const LeaveServerModal = () => {
  const { onOpen, isOpen, onClose, type, data } = useModal();
  const router = useRouter();
  const { server } = data;
  const [isLoading, setIsLoading] = useState(false);

  const isModalOpen = isOpen && type === 'leaveServer';

  const leaveServer = async () => {
    try {
      setIsLoading(true);
      const response = await axios.patch(`/api/servers/${server?.id}/leave`);
      onClose();
      router.refresh;
      router.push('/')
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
            Leave Server
          </DialogTitle>
          <DialogDescription className='text-center'>
            Are you sure you want to leave{' '}
            <span className='text-semibold text-indigo-500'>
              {server?.name}
            </span>{' '}
            ?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className='bg-gray-100 px-6 py-4'>
          <div className='flex items-center justify-between w-full'>
            <Button disabled={isLoading} variant='ghost' onClick={onClose}>
              Cancel
            </Button>
            <Button disabled={isLoading} variant='primary' onClick={leaveServer}>
              Confirm
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LeaveServerModal;
