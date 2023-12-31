'use client';

import { Plus } from 'lucide-react';
import { ActionTooltip } from '@/components/ui/action-tooltip';
import { useModal } from '../hooks/use-modal-store';

const NavigationAction = () => {
  const { onOpen } = useModal();

  return (
    <div>
      <ActionTooltip label='Add a server' align='center' side='right'>
        <div
          className='group flex items-center mt-5'
          onClick={() => onOpen('createServer')}
        >
          <div className='flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-emerald-500'>
            <Plus
              className='group-hover:text-white transition text-emerald-500'
              size={25}
            />
          </div>
        </div>
      </ActionTooltip>
    </div>
  );
};

export default NavigationAction;
