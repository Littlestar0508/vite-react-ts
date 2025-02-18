import { tm } from '@/utils/tw-merge';
import type { MemoItem as MemoItemType } from '../lib/supabase-client';
import { EditOne, TrashOne } from '@mynaui/icons-react';
import { deleteMemoItem } from '../lib/api';
import { useState } from 'react';
import Loading from './loading';
import delay from '@/utils/delay';

interface MemoItemProps {
  item: MemoItemType;
}

export default function MemoItem({ item }: MemoItemProps) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    await delay(600);
    await deleteMemoItem(item.id);
    setIsDeleting(false);
  };

  return (
    <li
      key={item.id}
      className={tm(
        'flex flex-col gap-1.5 p-4 bg-react text-white rounded-sm',
        { 'relative bg-react/35': isDeleting }
      )}
    >
      {isDeleting && (
        <Loading
          label="삭제 중..."
          className="absolute top-1/2 left-1/2 -translate-1/2 text-sky-300 size-20"
        />
      )}
      <h3 className="font-medium tracking-wide text-lg text-sky-300">
        {item.title}
      </h3>
      <p className="text-sm text-slate-200 leading-relaxed">{item.content}</p>
      <div role="group">
        <button
          type="button"
          aria-label="수정"
          title="수정"
          className={tm(
            'cursor-pointer',
            'size-6 opacity-75 hover:opacity-100'
          )}
        >
          <EditOne size={20} />
          {/* <EditOneSolid size={20} /> */}
        </button>
        <button
          type="button"
          aria-label="삭제"
          title="삭제"
          onClick={handleDelete}
          className={tm(
            'cursor-pointer',
            'size-6 opacity-75 hover:opacity-100'
          )}
        >
          <TrashOne size={20} />
        </button>
      </div>
    </li>
  );
}
